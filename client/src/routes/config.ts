import {
  Auth,
  FoundationAnalytics,
  FoundationAnalyticsEvent,
  FoundationAnalyticsEventType,
  Session,
} from '@genesislcap/foundation-comms';
import {
  defaultLoginConfig,
  LoginConfig,
} from '@genesislcap/foundation-login';
import { Constructable } from '@microsoft/fast-element';
import { Container, optional } from '@microsoft/fast-foundation';
import {NavigationPhase, Route, RouterConfiguration} from '@microsoft/fast-router';
import { defaultLayout, loginLayout } from '../layouts';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
import {Trades} from "./trades/trades";
import {Audit} from "./audit/audit";
import {Admin} from "./admin/admin";
import {Flash} from "./flash/flash";



// eslint-disable-next-line
declare var ENABLE_SSO: string;

const ssoSettings =
  typeof ENABLE_SSO !== 'undefined' && ENABLE_SSO === 'true'
    ? {
        autoAuth: true,
        sso: {
          toggled: true,
          identityProvidersPath: 'sso/list',
        },
      }
    : {};

type RouteSettings = {
  public?: boolean;
  isPermitted?: () => boolean;
}
export class MainRouterConfig extends RouterConfiguration<RouteSettings> {
  constructor(
    @Auth private auth: Auth,
    @Container private container: Container,
    @FoundationAnalytics private analytics: FoundationAnalytics,
    @Session private session: Session,
    @optional(LoginConfig)
    private loginConfig: LoginConfig = { ...defaultLoginConfig, autoAuth: true, autoConnect: true },
  ) {
    super();
  }

  public allRoutes = [
      { index: 1, path: 'home', title: 'Positions', icon: 'home', variant: 'solid' },
      { index: 2, path: 'trade', title: 'Trades', icon: 'money-bill', variant: 'solid' },
      { index: 3, path: 'flash', title: 'Reports', icon: 'download', variant: 'solid' },
      { index: 4, path: 'audit', title: 'Audit', icon: 'box-archive', variant: 'solid' },
      { index: 5, path: 'admin', title: 'Admin', icon: 'gear', variant: 'solid' },

  ];

  public configure() {
    this.title = 'Alternative Fund Manager';
    this.defaultLayout = defaultLayout;

    const authPath = 'login';

    this.routes.map(
      { path: '', redirect: authPath },
      {
        path: authPath,
        name: 'login',
        title: 'Login',
        element: async () => {
          const { configure, define } = await import(
            /* webpackChunkName: "foundation-login" */
            '@genesislcap/foundation-login'
          );
          configure(this.container, {
            autoConnect: true,
            defaultRedirectUrl: 'home',
            ...ssoSettings,
          });
          return define({
            name: `lumin-root-login`,
            /**
             * You can augment the template and styles here when needed.
             */
          });
        },
        layout: loginLayout,
        settings: { public: true },
        childRouters: true,
      },
      { path: 'home', element: Home, title: 'Positions', name: 'home' , settings: {
        isPermitted: () => this.auth.currentUser.hasPermission('VIEW_POSITION')
        }},
      { path: 'trade', element: Trades, title: 'Trades', name: 'trade', settings: {
          isPermitted: () => this.auth.currentUser.hasPermission('VIEW_TRADE')
        }},
      { path: 'flash', element: Flash, title: 'Reports', name: 'trade', settings: {
            isPermitted: () => this.auth.currentUser.hasPermission('VIEW_TRADE')
        }},
      { path: 'audit', element: Audit, title: 'Audit', name: 'audit', settings: {
          isPermitted: () => this.auth.currentUser.hasPermission('VIEW_AUDIT')
        }},
      { path: 'admin', element: Admin, title: 'Admin', name: 'admin', settings: {
          isPermitted: () => this.auth.currentUser.hasPermission('VIEW_OPERATION')
        }},
      { path: 'not-found', element: NotFound, title: 'Not Found', name: 'not-found' },
    );

    const auth = this.auth;

    /**
     * Example of a FallbackRouteDefinition
     */
    this.routes.fallback(() =>
      this.auth.isLoggedIn ? { redirect: 'not-found' } : { redirect: authPath },
    );

    /**
     * Example of a NavigationContributor
     */
    this.contributors.push({
      navigate: async (phase) => {
        const settings = phase.route.settings;

        this.analytics.trackEvent(FoundationAnalyticsEventType.routeChanged, <
          FoundationAnalyticsEvent.RouteChanged
        >{
          path: phase.route.endpoint.path,
        });

        /**
         * If public route don't block
         */
        if (settings && settings.public) {
          return;
        }

        /**
         * If logged in don't block
         */
        if (this.auth.isLoggedIn) {
          this.redirectIfNotePermitted(settings, phase)
          return;
        }

        /**
         * If allowAutoAuth and session is valid try to connect+auto-login
         */
        if (this.loginConfig.autoAuth && (await auth.reAuthFromSession())) {
          return;
        }

        /**
         * Otherwise route them somewhere, like to a login
         */
        phase.cancel(() => {
          this.session.captureReturnUrl();
          Route.name.replace(phase.router, authPath);
        });
      },
    });
  }

  public construct<T>(Type: Constructable<T>): T {
    return this.container.get(Type) as T;
  }

  private redirectIfNotePermitted(settings: RouteSettings, phase: NavigationPhase) {
    if (settings && typeof settings.isPermitted === 'function' && !settings.isPermitted()) {
      phase.cancel(() => {
        Route.name.replace(phase.router, 'not-found');
      });
    }
  }
}
