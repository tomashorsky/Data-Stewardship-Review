import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemCardComponent } from './layout/main_dashboard/item-card/item-card.component'

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations'
import { DocGridComponent } from './layout/main_dashboard/doc-grid/doc-grid.component'
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button'
import { NavbarComponent } from './layout/common_components/navbar/navbar.component'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { DocReviewerComponent } from './layout/doc_reviewer/doc-reviewer/doc-reviewer.component'
import { DocumentViewComponent } from './layout/common_components/document/document-view/document-view.component'
import { MainDashboardComponent } from './layout/main_dashboard/main-dashboard/main-dashboard.component'
import { DocSubmitterComponent } from './layout/doc_submitter/doc-submitter/doc-submitter.component'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { DiscussionPosterComponent } from './layout/common_components/discussion_poster/discussion-poster/discussion-poster.component'
import { MatListModule } from '@angular/material/list'
import { CommentBasicComponent } from './layout/common_components/comments/comment_basic/comment-basic/comment-basic.component'
import { DiscussionCommentComponent } from './layout/common_components/comments/discussion-comment/discussion-comment.component'
import { DiscussionWindowComponent } from './layout/common_components/comments/discussion-window/discussion-window.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonToggleGroup, MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatTableModule} from '@angular/material/table';
import { DocTableComponent } from './layout/main_dashboard/doc-table/doc-table.component';
import { OptionsComponent } from './layout/main_dashboard/options/options.component'; 
import { DocRatingComponent } from './layout/doc_reviewer/doc-rating/doc-rating.component';
import {MatSliderModule} from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { LoginPageComponent } from './layout/user_auth/login-page/login-page.component';
import { RegisterPageComponent } from './layout/user_auth/register-page/register-page.component';
import { AuthInterceptor } from './layout/user_auth/auth-interceptor';
import { UsermapPageComponent } from './layout/usermap/usermap-page/usermap-page.component'
import {MatDividerModule} from '@angular/material/divider';
import { DocSubmissionComponent } from './layout/doc-submission/doc-submission.component';
import { EvaluationsComponent } from './layout/evaluations/evaluations.component';
import { userAuthGuard } from './Guard/auth.guard'

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    DocGridComponent,
    NavbarComponent,
    DocReviewerComponent,
    DocumentViewComponent,
    MainDashboardComponent,
    DocSubmitterComponent,
    DiscussionPosterComponent,
    CommentBasicComponent,
    DiscussionCommentComponent,
    DiscussionWindowComponent,
    DocTableComponent,
    OptionsComponent,
    DocRatingComponent,
    LoginPageComponent,
    RegisterPageComponent,
    UsermapPageComponent,
    DocSubmissionComponent,
    EvaluationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatGridListModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatTableModule,
    MatSliderModule,
    MatSelectModule,
    MatDividerModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
