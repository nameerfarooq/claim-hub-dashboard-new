import { Card } from '@/components/ui'
import TabContent from '@/components/ui/Tabs/TabContent'
import TabList from '@/components/ui/Tabs/TabList'
import TabNav from '@/components/ui/Tabs/TabNav'
import Tabs from '@/components/ui/Tabs/Tabs'
import React, { useState, useEffect } from 'react'
import Overview from './Overview'
import Tasks from '../Tasks/Main'
import Communication from './Communication'
import Scheduler from './Scheduler'
import Photos from './Photos'
import Estimate from './EstimateViews/Estimate'
import Documents from './Documents'
import Orders from './OrderViews/Orders'
import {
    TbCalendar,
    TbFile,
    TbFileDescription,
    TbHome,
    TbMail,
} from 'react-icons/tb'
import { GoImage } from 'react-icons/go'
import { useThemeStore } from '@/store/themeStore'

const Main = () => {
    const { setSideNavCollapse } = useThemeStore((state) => state);
    useEffect(() => {
        setSideNavCollapse(true);
      }, [setSideNavCollapse]);


    const [currentTab, setCurrentTab] = useState('overview')
    const scheduleData = [
        {
            barVariant: 'initialinspection',
            displayOrder: 1,
            end: new Date(
                'Wed Jan 08 2025 00:00:00 GMT+0500 (Pakistan Standard Time)',
            ),
            hideChildren: false,
            id: 'fd521fec-35bb-4c84-abc7-df590afc9076',
            name: 'Initial inspection',
            progress: 40,
            project: '96c97159-aaff-45d0-b874-74e4aa059b0f',
            start: new Date(
                'Wed Jan 01 2025 00:00:00 GMT+0500 (Pakistan Standard Time)',
            ),
            styles: {
                backgroundColor: 'rgba(125, 211, 252, 0.5)',
                backgroundSelectedColor: 'rgba(125, 211, 252, 0.5)',
                progressColor: 'rgb(125, 211, 252)',
                progressSelectedColor: 'rgb(125, 211, 252)',
            },
            type: 'project',
        },
        {
            barVariant: 'moldTesting',
            displayOrder: 2,
            end: new Date(
                'Thu Jan 02 2025 12:28:00 GMT+0500 (Pakistan Standard Time)',
            ),
            hideChildren: false,
            id: '2102bc55-6b7a-4218-b5d8-ed9ecc5fc737',
            name: 'Mold Testing',
            progress: 85,
            project: 'fd521fec-35bb-4c84-abc7-df590afc9076',
            start: new Date(
                'Wed Jan 01 2025 00:00:00 GMT+0500 (Pakistan Standard Time)',
            ),
            styles: {
                backgroundColor: 'rgba(255, 165, 0, 0.5)',
                backgroundSelectedColor: 'rgba(255, 165, 0, 0.5)',
                progressColor: 'rgb(255, 165, 0)',
                progressSelectedColor: 'rgb(255, 165, 0)',
            },
            type: 'task',
        },
        {
            barVariant: 'moldRemidiation',
            displayOrder: 3,
            end: new Date(
                'Sat Jan 04 2025 00:00:00 GMT+0500 (Pakistan Standard Time)',
            ),
            hideChildren: false,
            id: 'ae9ebb76-5241-4c24-a921-b4b704a7edbd',
            name: 'Mold Remidiation',
            progress: 35,
            project: 'fd521fec-35bb-4c84-abc7-df590afc9076',
            start: new Date(
                'Thu Jan 02 2025 00:00:00 GMT+0500 (Pakistan Standard Time)',
            ),
            styles: {
                backgroundColor: 'rgba(144, 238, 144, 0.5)',
                backgroundSelectedColor: 'rgba(144, 238, 144, 0.5)',
                progressColor: 'rgb(144, 238, 144)',
                progressSelectedColor: 'rgb(144, 238, 144)',
            },
            type: 'task',
        },
        {
            barVariant: 'checklist',
            displayOrder: 4,
            end: new Date(
                'Fri Jan 30 2025 00:00:00 GMT+0500 (Pakistan Standard Time)',
            ),
            hideChildren: false,
            id: '9b73c98c-42bb-4c64-9e91-91b39d1e7455',
            name: 'Photo Check-List',
            progress: 50,
            project: 'fd521fec-35bb-4c84-abc7-df590afc9076',
            start: new Date(
                'Mon Jan 22 2025 00:00:00 GMT+0500 (Pakistan Standard Time)',
            ),
            styles: {
                backgroundColor: 'rgba(144, 238, 144, 0.5)',
                backgroundSelectedColor: 'rgba(144, 238, 144, 0.5)',
                progressColor: 'rgb(144, 238, 144)',
                progressSelectedColor: 'rgb(144, 238, 144)',
            },
            type: 'task',
        },
        {
            barVariant: 'waterExtraction',
            displayOrder: 5,
            end: new Date(
                'Wed Jan 08 2025 00:00:00 GMT+0500 (Pakistan Standard Time)',
            ),
            hideChildren: false,
            id: '4bd47b1d-bb51-40f4-843e-0e4dd632b5e7',
            name: 'Water Extraction',
            progress: 60,
            project: '96c97159-aaff-45d0-b874-74e4aa059b0f',
            start: new Date(
                'Sat Jan 04 2025 00:00:00 GMT+0500 (Pakistan Standard Time)',
            ),
            styles: {
                backgroundColor: 'rgba(255, 69, 0, 0.5)',
                backgroundSelectedColor: 'rgba(255, 69, 0, 0.5)',
                progressColor: 'rgb(255, 69, 0)',
                progressSelectedColor: 'rgb(255, 69, 0)',
            },
            type: 'project',
        },
        {
            barVariant: 'drying',
            displayOrder: 5,
            end: new Date(
                'Mon Jan 20 2025 00:00:00 GMT+0500 (Pakistan Standard Time)',
            ),
            hideChildren: false,
            id: '96c97159-aaff-45d0-b874-cd0f6a286238',
            name: 'Drying and dehumidification',
            progress: 40,
            project: '4bd47b1d-bb51-40f4-843e-0e4dd632b5e7',
            start: new Date(
                'Mon Jan 06 2025 00:00:00 GMT+0500 (Pakistan Standard Time)',
            ),
            styles: {
                backgroundColor: 'rgba(0, 255, 255, 0.5)',
                backgroundSelectedColor: 'rgba(0, 255, 255, 0.5)',
                progressColor: 'rgb(0, 255, 255)',
                progressSelectedColor: 'rgb(0, 255, 255)',
            },
            type: 'task',
        },
        {
            barVariant: 'roofTarp',
            displayOrder: 6,
            end: new Date(
                'Thu Jan 09 2025 00:00:00 GMT+0500 (Pakistan Standard Time)',
            ),
            hideChildren: false,
            id: '3209fd05-a73d-4947-84d9-cd0f6a286238',
            name: 'Roof Tarp Installation',
            progress: 20,
            project: '4bd47b1d-bb51-40f4-843e-0e4dd632b5e7',
            start: new Date(
                'Mon Jan 06 2025 00:00:00 GMT+0500 (Pakistan Standard Time)',
            ),
            styles: {
                backgroundColor: 'rgba(255, 165, 0, 0.5)',
                backgroundSelectedColor: 'rgba(255, 165, 0, 0.5)',
                progressColor: 'rgb(255, 165, 0)',
                progressSelectedColor: 'rgb(255, 165, 0)',
            },
            type: 'task',
        },
        {
            barVariant: 'followup',
            displayOrder: 7,
            end: new Date(
                'Wed Jan 15 2025 00:00:00 GMT+0500 (Pakistan Standard Time)',
            ),
            hideChildren: false,
            id: '68b2a36f-74b3-432a-a7f5-ec66db501514',
            name: 'Follow-Up Inspection',
            progress: 10,
            project: '4bd47b1d-bb51-40f4-843e-0e4dd632b5e7',
            start: new Date(
                'Thu Jan 09 2025 00:00:00 GMT+0500 (Pakistan Standard Time)',
            ),
            styles: {
                backgroundColor: 'rgba(255, 255, 0, 0.5)',
                backgroundSelectedColor: 'rgba(255, 255, 0, 0.5)',
                progressColor: 'rgb(255, 255, 0)',
                progressSelectedColor: 'rgb(255, 255, 0)',
            },
            type: 'task',
        },
       
    ]

    return (
        <Card
            footer={{
                content: (
                    <Tabs
                        value={currentTab}
                        onChange={(val) => setCurrentTab(val)}
                    >
                        <TabList className="border-b border-primary mb-1 custom-scrollbar">
                            <TabNav
                                icon={<TbHome />}
                                className={`${currentTab === 'overview' ? 'border-b border-primary font-bold text-black' : ''}`}
                                value="overview"
                            >
                                Overview
                            </TabNav>
                            <TabNav
                                icon={<TbMail />}
                                className={`${currentTab === 'tasks' ? 'border-b border-primary font-bold text-black' : ''}`}
                                value="tasks"
                            >
                                Tasks
                            </TabNav>
                            <TabNav
                                icon={<TbMail />}
                                className={`${currentTab === 'communication' ? 'border-b border-primary font-bold text-black' : ''}`}
                                value="communication"
                            >
                                Communication
                            </TabNav>
                            <TabNav
                                icon={<TbCalendar />}
                                className={`${currentTab === 'scheduler' ? 'border-b border-primary font-bold text-black' : ''}`}
                                value="scheduler"
                            >
                                Scheduler
                            </TabNav>
                            <TabNav
                                icon={<GoImage />}
                                className={`${currentTab === 'photos' ? 'border-b border-primary font-bold text-black' : ''}`}
                                value="photos"
                            >
                                Photos
                            </TabNav>
                            <TabNav
                                icon={<TbFile />}
                                className={`${currentTab === 'estimate' ? 'border-b border-primary font-bold text-black' : ''}`}
                                value="estimate"
                            >
                                Estimate
                            </TabNav>
                            <TabNav
                                icon={<TbFileDescription />}
                                className={`${currentTab === 'documents' ? 'border-b border-primary font-bold text-black' : ''}`}
                                value="documents"
                            >
                                Documents
                            </TabNav>
                            <TabNav
                                icon={<TbFileDescription />}
                                className={`${currentTab === 'orders' ? 'border-b border-primary font-bold text-black' : ''}`}
                                value="orders"
                            >
                                Order
                            </TabNav>
                        </TabList>
                    </Tabs>
                ),
                className: 'p-0 bg-white',
            }}
        >
            <Tabs value={currentTab} onChange={(val) => setCurrentTab(val)}>
                <TabList className="border-b border-primary mb-1 custom-scrollbar">
                    <TabNav
                        icon={<TbHome />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'overview' ? 'bg-primary-mild text-white' : 'bg-primary-subtle'}`}
                        value="overview"
                    >
                        Overview
                    </TabNav>
                    <TabNav
                        icon={<TbMail />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'tasks' ? 'bg-primary-mild text-white' : 'bg-primary-subtle'}`}
                        value="tasks"
                    >
                        Tasks
                    </TabNav>
                    <TabNav
                        icon={<TbMail />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'communication' ? 'bg-primary-mild text-white' : 'bg-primary-subtle'}`}
                        value="communication"
                    >
                        Communication
                    </TabNav>
                    <TabNav
                        icon={<TbCalendar />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'scheduler' ? 'bg-primary-mild text-white' : 'bg-primary-subtle'}`}
                        value="scheduler"
                    >
                        Scheduler
                    </TabNav>
                    <TabNav
                        icon={<GoImage />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'photos' ? 'bg-primary-mild text-white' : 'bg-primary-subtle'}`}
                        value="photos"
                    >
                        Photos
                    </TabNav>
                    <TabNav
                        icon={<TbFile />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'estimate' ? 'bg-primary-mild text-white' : 'bg-primary-subtle'}`}
                        value="estimate"
                    >
                        Estimate
                    </TabNav>
                    <TabNav
                        icon={<TbFileDescription />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'documents' ? 'bg-primary-mild text-white' : 'bg-primary-subtle'}`}
                        value="documents"
                    >
                        Documents
                    </TabNav>
                    <TabNav
                        icon={<TbFileDescription />}
                        className={`border border-primary-mild rounded-t-lg mx-1 ${currentTab === 'orders' ? 'bg-primary-mild text-white' : 'bg-primary-subtle'}`}
                        value="orders"
                    >
                        Order
                    </TabNav>
                </TabList>
                <div className="p-4">
                    <TabContent value="overview">
                        <Overview />
                    </TabContent>
                    <TabContent value="tasks">
                        <Tasks />
                    </TabContent>
                    <TabContent value="communication">
                        <Communication />
                    </TabContent>
                    <TabContent value="scheduler">
                        <Scheduler data={scheduleData} />
                    </TabContent>
                    <TabContent value="photos">
                        <Photos />
                    </TabContent>
                    <TabContent value="estimate">
                        <Estimate />
                    </TabContent>
                    <TabContent value="documents">
                        <Documents />
                    </TabContent>
                    <TabContent value="orders">
                        <Orders />
                    </TabContent>
                </div>
            </Tabs>
        </Card>
    )
}

export default Main
