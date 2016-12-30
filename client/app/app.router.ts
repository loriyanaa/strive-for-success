import { Routes } from '@angular/router';

import { 
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    MyProfileComponent 
} from './user';

import {
    InterviewsMainComponent,
    InterviewDetailsComponent,
    InterviewsAllComponent
} from './interviews';

import {
    ProfilesMainComponent,
    ProfileDetailsComponent,
    ProfilesAllComponent
} from './profiles';

import { HomeComponent } from './home';
import { ContactComponent } from './contact';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'interviews',
        component: InterviewsMainComponent,
        children: [
            { path: 'all', component: InterviewsAllComponent },
            { path: ':id', component: InterviewDetailsComponent },
            // { path: 'bussiness', component: InterviewsBussinessComponent },
            // { path: 'art', component: InterviewaArtComponent },
            // { path: 'technology', component: InterviewsTechnologyComponent }
        ]
    },
    { path: 'profiles',
        component: ProfilesMainComponent,
        children: [
            { path: 'all', component: ProfilesAllComponent },
            { 
                path: ':id', component: ProfileDetailsComponent,
                // children: [
                //     { 
                //         path: 'projects', component: ProjectsComponent,
                //         children: [
                //             { path: 'preview/:id', component: ProjectPreviewComponent }
                //         ]
                //     }
                // ]
            },
            // { path: 'young-entrepreneurs', component: TopYoungEntrepreneuersComponent },
            // { path: 'successful-entrepreneurs', component: TopSuccessfulEntrepreneursComponent },
        ]
    },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'my-profile',
        component: MyProfileComponent,
        children: [
            // { path: 'edit', component: EditProfileComponent },
            // {
            //     path: 'projects', component: ProjectsComponent,
            //     children: [
            //         { path: 'create', component: CreateProjectComponent },
            //         { path: 'edit/:id', component: EditProjectComponent },
            //         { path: 'preview/:id', component: ProjectPreviewComponent }
            //     ]
            // }
        ]
    },
    { path: 'contact', component: ContactComponent }
];