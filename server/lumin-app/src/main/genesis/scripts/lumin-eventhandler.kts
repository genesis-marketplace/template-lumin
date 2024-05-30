package scripts

/**
 *
 *   System              : lumin
 *   Sub-System          : lumin Configuration
 *   Version             : 1.0
 *   Copyright           : (c) GENESIS
 *   Date                : 2021-09-07
 *
 *   Function : Provide Event Handler configuration for lumin.
 *
 *   Modification History
 *
 */

import global.genesis.db.rx.entity.multi.RxEntityDb
import global.genesis.gen.dao.builder.LuminOasCsBuilder
import global.genesis.gen.dao.builder.LuminOasPosBuilder
import global.genesis.gen.dao.builder.LuminPavoCsBuilder
import global.genesis.gen.dao.builder.LuminPavoPosBuilder
import io.reactivex.rxjava3.core.Single

val rxEntityDb: RxEntityDb = inject()

LOG.info("=== Consolidate Rights - init ===")
LOG.info("Loading PROFILE_RIGHTS")

val rightSummaryList: MutableList<RightSummary> = rxEntityDb.getBulk(RightSummary::class.java)
    .toList()
    .blockingGet()
rxEntityDb.deleteAll(rightSummaryList).blockingGet()

LOG.info("RIGHT_SUMMARY records deleted")

val usersByName: MutableMap<String, User> = rxEntityDb.getBulk(User::class.java)
    .toMap { it.userName }
    .blockingGet()

val profileUserByUserName: MutableMap<String, MutableCollection<String>> = rxEntityDb.getBulk(ProfileUser::class.java)
    .toMultimap({ it.userName }, { it.profileName })
    .blockingGet()

val profileRightByProfileName: MutableMap<String, MutableCollection<String>> = rxEntityDb.getBulk(ProfileRight::class.java)
    .toMultimap({ it.profileName }, { it.rightCode })
    .blockingGet()

val realUserRights = usersByName.entries.associate {
    it.key to profileUserByUserName.getOrDefault(it.key, emptyList()).map { profile ->
        profileRightByProfileName.getOrDefault(profile, emptyList()).toList()
    }.flatten().distinct()
}

for ((user, codes) in realUserRights) {
    LOG.info("Consolidating rights for user $user")
    Single.merge(
        codes.map { code ->
            rxEntityDb.insert(RightSummary {
                userName = user
                rightCode = code
            })
        }
    ).map { true }.blockingLast(true)
    LOG.info("Rights consolidated for user $user")
}
LOG.info("=== Consolidate Rights - end ===")

eventHandler {
    eventHandler <Position> (name="POSITION_UPDATE"){
        schemaValidation = false
        onCommit { event ->
            val position = event.details
//            AshishTest.printSomething(position.toString())
            LOG.info("Updating the position==> $position")
            entityDb.modify(position)
            ack()
        }
    }

    eventHandler <Trade>(name="TRADE_INSERT"){
        schemaValidation = false
        onCommit { event ->
            val trade = event.details
            LOG.info("Trade Insert ==> $trade")
            entityDb.insert(trade)
            ack()
        }
    }

    eventHandler <Trade>(name="TRADE_UPDATE"){
        schemaValidation = false
        onCommit { event ->
            val trade = event.details
            LOG.info("Trade Modify ==> $trade")
            entityDb.modify(trade)
            ack()
        }
    }

    eventHandler <Trade>(name="TRADE_DELETE"){
        schemaValidation = false
        onCommit { event ->
            val trade = event.details
            LOG.info("Trade Delete ==> $trade")
            entityDb.delete(trade)
            ack()
        }
    }

    eventHandler <UserAttributes>(name="USER_ATTRIBUTES_INSERT") {
        schemaValidation = false
        onCommit {event ->
            val userAttributes = event.details
            LOG.info("User Attributes insert ==> $userAttributes")
            entityDb.insert(userAttributes)
            ack()
        }
    }

    eventHandler <UserAttributes>(name="USER_ATTRIBUTES_MODIFY") {
        schemaValidation = false
        onCommit {event ->
            val userAttributes = event.details
            LOG.info("User Attributes modify ==> $userAttributes")
            entityDb.modify(userAttributes)
            ack()
        }
    }

    eventHandler <UserAttributes>(name="USER_ATTRIBUTES_DELETE") {
        schemaValidation = false
        onCommit {event ->
            val userAttributes = event.details
            LOG.info("User Attributes delete ==> $userAttributes")
            entityDb.delete(userAttributes)
            ack()
        }
    }

    eventHandler <Right>(name="RIGHT_INSERT") {
        schemaValidation = false
        onCommit { event ->
            val rights = event.details
            entityDb.insert(rights)
            ack()
        }
    }

    eventHandler <Right>(name="RIGHT_MODIFY") {
        schemaValidation = false
        onCommit { event ->
            val rights = event.details
            entityDb.modify(rights)
            ack()
        }
    }

    eventHandler <ProfileRight>(name="PROFILE_RIGHT_INSERT") {
        schemaValidation = false
        onCommit { event ->
            val profileRight = event.details
            entityDb.insert(profileRight)
            ack()
        }
    }

    eventHandler <AumSummary>(name="UPDATE_AUM_SUMMARY"){
        schemaValidation=false
        onCommit { event ->
            val detail = event.details
            LOG.info("UPDATE_AUM_SUMMARY => $detail")
            detail.unfundedCommitment = detail.commitment!! - detail.capitalCalled!!
            detail.percentCalled = (detail.capitalCalled!! / detail.commitment!!) * 100
            entityDb.modify(detail)
            ack()
        }
    }

    eventHandler <LuminOasView> (name="UPDATE_OAS_MAIN")  {
        schemaValidation = false
        onCommit { event ->
            val details = event.details
            LOG.info("lumin-eventhandler|update-oas-main => $details")
            val oasCs = createOasCs(event.details)
            val oasPos = createOasPos(event.details)
            LOG.info("lumin-eventhandler|updated-oas-cs => $oasCs")
            LOG.info("lumin-eventhandler|updated-oas-pos => $oasPos")
            ack()
        }
    }

    eventHandler <LuminPavoView> (name="UPDATE_PAVO")  {
        schemaValidation = false
        onCommit { event ->
            val details = event.details
            LOG.info("lumin-eventhandler|update-pavo => $details")
            val pavoCs = createPavoCs(event.details)
            val pavoPos = createPavoPos(event.details)
            LOG.info("lumin-eventhandler|updated-pavo-cs => $pavoCs")
            LOG.info("lumin-eventhandler|updated-pavo-pos => $pavoPos")
            ack()
        }
    }
}

fun createOasCs(details: LuminOasView) {
    val builder = LuminOasCsBuilder().setDeal(details.deal).setDealDate(details.dealDate).setAssetClass(details.assetClass).setEstimatedNav(details.estimatedNav)
        .setSdpnl(details.sdpnl).setSmtdpnl(details.smtdpnl).setSytdpnl(details.sytdpnl).setSitdpnl(details.sitdpnl)
        .setGrMtd(details.grMtd).setGrYtd(details.grYtd).setGrItd(details.grItd)
    when{
        details.estimatedNav?.isFinite() == true && details.sdpnl?.isFinite() == true -> {
            builder.grDtd = details.sdpnl!! / (details.estimatedNav!! - details.sdpnl!!)
        }
    }
    rxEntityDb.modify(builder.build()).blockingGet()
}

fun createOasPos(details: LuminOasView) {
    val builder = LuminOasPosBuilder().setDeal(details.deal).setSDeltaAdjLmv(details.sDeltaAdjLmv).setSDeltaAdjSmv(details.sDeltaAdjSmv).setGross(details.gross)
    when {
        details.estimatedNav?.isFinite() == true && details.gross?.isFinite() == true -> {
            builder.leverage = details.gross!! / details.estimatedNav!!
        }
    }
    rxEntityDb.modify(builder.build()).blockingGet()
}

fun createPavoCs(details: LuminPavoView) {
    val builder = LuminPavoCsBuilder().setDeal(details.deal).setDealDate(details.dealDate).setAssetClass(details.assetClass).setEstimatedNav(details.estimatedNav)
        .setSdpnl(details.sdpnl).setSmtdpnl(details.smtdpnl).setSytdpnl(details.sytdpnl).setSitdpnl(details.sitdpnl)
        .setGrMtd(details.grMtd).setGrYtd(details.grYtd).setGrItd(details.grItd)
    when{
        details.estimatedNav?.isFinite() == true && details.sdpnl?.isFinite() == true -> {
            builder.grDtd = details.sdpnl!! / (details.estimatedNav!! - details.sdpnl!!)
        }
    }
    rxEntityDb.modify(builder.build()).blockingGet()
}

fun createPavoPos(details: LuminPavoView) {
    val builder = LuminPavoPosBuilder().setDeal(details.deal).setSDeltaAdjLmv(details.sDeltaAdjLmv).setSDeltaAdjSmv(details.sDeltaAdjSmv).setGross(details.gross)
    when {
        details.estimatedNav?.isFinite() == true && details.gross?.isFinite() == true -> {
            builder.leverage = details.gross!! / details.estimatedNav!!
        }
    }
    rxEntityDb.modify(builder.build()).blockingGet()
}
