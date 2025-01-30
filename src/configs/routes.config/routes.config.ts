import { lazy } from 'react'
import authRoute from './authRoute'
import othersRoute from './othersRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    {
        key: 'contacts',
        path: '/contacts',
        component: lazy(() => import('@/views/Contact/Main')),
        authority: [],
    },
    {
        key: 'contactDetails',
        path: '/contact-details',
        component: lazy(() => import('@/views/Contact/ContactDetails/Main')),
        authority: [],
    },
    {
        key: 'contactEdit',
        path: '/contact-edit',
        component: lazy(() => import('@/views/Contact/ContactEdit/Main')),
        authority: [],
    },
    {
        key: 'contactNew',
        path: '/contact-create',
        component: lazy(() => import('@/views/Contact/ContactNew/Main')),
        authority: [],
    },
    {
        key: 'leads',
        path: '/leads',
        component: lazy(() => import('@/views/Leads/Main')),
        authority: [],
    },
    {
        key: 'claims.sales',
        path: '/sales',
        component: lazy(() => import('@/views/Claim/Sales')),
        authority: [],
    },
    {
        key: 'claims.processing',
        path: '/processing',
        component: lazy(() => import('@/views/Claim/Processing')),
        authority: [],
    },
    {
        key: 'claims.job',
        path: '/job',
        component: lazy(() => import('@/views/Claim/Job')),
        authority: [],
    },
    {
        key: 'claims.accounting',
        path: '/accounting',
        component: lazy(() => import('@/views/Claim/Accounting')),
        authority: [],
    },
    {
        key: 'claims.negotiations',
        path: '/negotiations',
        component: lazy(() => import('@/views/Claim/Negotiations')),
        authority: [],
    },
    {
        key: 'claims.closeout',
        path: '/close-out',
        component: lazy(() => import('@/views/Claim/CloseOut')),
        authority: [],
    },
    {
        key: 'claims.pipeline',
        path: '/claims-pipeline',
        component: lazy(() => import('@/views/Claim/ClaimBoard/Main')),
        authority: [],
    },
    {
        key: 'claims.list',
        path: '/claims',
        component: lazy(() => import('@/views/Claim/ClaimList')),
        authority: [],
    },
    {
        key: 'claims.pipeline',
        path: '/overview',
        component: lazy(() => import('@/views/Overview/Main')),
        authority: [],
    },
    {
        key: 'create-estimate',
        path: '/overview/create-estimate',
        component: lazy(
            () => import('@/views/Overview/EstimateViews/CreateEstimate'),
        ),
        authority: [],
    },
    {
        key: 'claims.pipeline',
        path: '/overview/order-details',
        component: lazy(
            () => import('@/views/Overview/OrderViews/OrderDetails'),
        ),
        authority: [],
    },
    {
        key: 'claims.pipeline',
        path: '/overview/create-job-order',
        component: lazy(
            () => import('@/views/Overview/OrderViews/CreateJobOrder'),
        ),
        authority: [],
    },
    {
        key: 'pricing',
        path: '/pricing',
        component: lazy(() => import('@/views/Pricing')),
        authority: [],
    },
    {
        key: 'profile',
        path: '/profile',
        component: lazy(() => import('@/views/Profile/Profile')),
        authority: [],
    },
    {
        key: 'equipment',
        path: '/equipment',
        component: lazy(() => import('@/views/Equipment')),
        authority: [],
    },
    {
        key: 'activityLog',
        path: '/activityLog',
        component: lazy(() => import('@/views/ActivityLog/Main')),
        authority: [],
    },
    {
        key: 'tasks',
        path: '/tasks',
        component: lazy(() => import('@/views/Tasks/Main')),
        authority: [],
    },
    {
        key: 'calendar',
        path: '/calendar',
        component: lazy(() => import('@/views/Calendar/Main')),
        authority: [],
    },
    ...othersRoute,
]
