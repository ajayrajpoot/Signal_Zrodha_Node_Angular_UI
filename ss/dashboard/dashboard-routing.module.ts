import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
  path: '', component: DashboardComponent, children: [
    { path: '', loadChildren: () => import('./broadcast/broadcast.module').then(m => m.BroadcastModule) },
    { path: 'signal', loadChildren: () => import('../dashboard/signal/signal.module').then(m => m.SignalModule) },

    { path: 'mentors', loadChildren: () => import('../dashboard/mentor/mentor.module').then(m => m.MentorModule) },
    { path: 'subscriber', loadChildren: () => import('../dashboard/subscriber/subscriber.module').then(m => m.SubscriberModule) },
    { path: 'plan', loadChildren: () => import('../dashboard/plan/plan.module').then(m => m.PlanModule) },
    { path: 'signup', loadChildren: () => import('../signup/signup.module').then(m => m.SignupModule) },
    { path: 'myPlan', loadChildren: () => import('./my-plan/my-plan.module').then(m => m.MyPlanModule) },
    { path: 'mySignal', loadChildren: () => import('./my-signal/my-signal.module').then(m => m.MySignalModule) },
    { path: 'Broadcast', loadChildren: () => import('./broadcast/broadcast.module').then(m => m.BroadcastModule) },
    { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },

  { path: 'wallet', loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletModule) },
  ]
},{
  path: 'mentor', component: DashboardComponent, children: [
    // { path: '', loadChildren: () => import('./broadcast/broadcast.module').then(m => m.BroadcastModule) },
    { path: 'signal', loadChildren: () => import('../dashboard/signal/signal.module').then(m => m.SignalModule) },

    { path: 'mentor', loadChildren: () => import('../dashboard/mentor/mentor.module').then(m => m.MentorModule) },
    // { path: 'subscriber', loadChildren: () => import('../dashboard/subscriber/subscriber.module').then(m => m.SubscriberModule) },
    { path: 'plan', loadChildren: () => import('../dashboard/plan/plan.module').then(m => m.PlanModule) },
    // { path: 'signup', loadChildren: () => import('../signup/signup.module').then(m => m.SignupModule) },
    // { path: 'myPlan', loadChildren: () => import('./my-plan/my-plan.module').then(m => m.MyPlanModule) },
    { path: 'mySignal', loadChildren: () => import('./my-signal/my-signal.module').then(m => m.MySignalModule) },
    // { path: 'Broadcast', loadChildren: () => import('./broadcast/broadcast.module').then(m => m.BroadcastModule) },
    { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
  ]
}, {
  path: 'subscriber', component: DashboardComponent, children: [
    { path: '', loadChildren: () => import('./broadcast/broadcast.module').then(m => m.BroadcastModule) },
    // { path: 'signal', loadChildren: () => import('../dashboard/signal/signal.module').then(m => m.SignalModule) },

    // { path: 'mentor', loadChildren: () => import('../dashboard/mentor/mentor.module').then(m => m.MentorModule) },
    // { path: 'subscriber', loadChildren: () => import('../dashboard/subscriber/subscriber.module').then(m => m.SubscriberModule) },
    // { path: 'plan', loadChildren: () => import('../dashboard/plan/plan.module').then(m => m.PlanModule) },
    { path: 'myPlan', loadChildren: () => import('./my-plan/my-plan.module').then(m => m.MyPlanModule) },
    // { path: 'mySignal', loadChildren: () => import('./my-signal/my-signal.module').then(m => m.MySignalModule) },
    { path: 'Broadcast', loadChildren: () => import('./broadcast/broadcast.module').then(m => m.BroadcastModule) },
    { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
