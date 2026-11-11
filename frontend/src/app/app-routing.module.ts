import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DocReviewerComponent } from './layout/doc_reviewer/doc-reviewer/doc-reviewer.component'
import { MainDashboardComponent } from './layout/main_dashboard/main-dashboard/main-dashboard.component'
import { DocSubmitterComponent } from './layout/doc_submitter/doc-submitter/doc-submitter.component'
import { DiscussionPosterComponent } from './layout/common_components/discussion_poster/discussion-poster/discussion-poster.component'
import { LoginPageComponent } from './layout/user_auth/login-page/login-page.component'
import { RegisterPageComponent } from './layout/user_auth/register-page/register-page.component'
import { UsermapPageComponent } from './layout/usermap/usermap-page/usermap-page.component'
import { userAuthGuard } from './Guard/auth.guard'
import { DocSubmissionComponent } from './layout/doc-submission/doc-submission.component'
import { EvaluationsComponent } from './layout/evaluations/evaluations.component'

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'registration',component: RegisterPageComponent},
  {path: 'me', component:UsermapPageComponent,canActivate: [userAuthGuard] },
  {path: 'evaluations/:public_document_uuid', component: EvaluationsComponent,canActivate: [userAuthGuard]},
  {path: 'documents/submit', component: DocSubmissionComponent, canActivate: [userAuthGuard]},
  { path: 'documents', component: MainDashboardComponent,canActivate: [userAuthGuard] },
  {
    path: 'documents/:public_document_uuid',
    component: DocReviewerComponent,
    children: [
      {
        path: 'discussion/:public_document_uuid',
        component: DiscussionPosterComponent,
      },
    ],
    canActivate: [userAuthGuard]
  },
  {
    path: 'documents/submitted/:private_document_uuid',
    component: DocSubmitterComponent,
    canActivate: [userAuthGuard]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
