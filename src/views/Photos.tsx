import { Card, Dropdown, Table } from '@/components/ui'
import Th from '@/components/ui/Table/Th'
import THead from '@/components/ui/Table/THead'
import TBody from '@/components/ui/Table/TBody'
import Tr from '@/components/ui/Table/Tr'
import Td from '@/components/ui/Table/Td'
import TabContent from '@/components/ui/Tabs/TabContent'
import TabList from '@/components/ui/Tabs/TabList'
import TabNav from '@/components/ui/Tabs/TabNav'
import Tabs from '@/components/ui/Tabs/Tabs'
import React, { SyntheticEvent, useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import PdfIcon from '@/assets/icons/PdfIcon'

const Photos = () => {
    const [currentTab, setCurrentTab] = useState('all')
    const [layoutGrid, setLayoutGrid] = useState(true)

    const dropdownItems = [
        { key: 'a', name: 'Item A' },
        { key: 'b', name: 'Item B' },
        { key: 'c', name: 'Item C' },
        { key: 'd', name: 'Item D' },
    ]

    const files = [
        {
            id: 1,
            name: 'Structural Damage Basement.pdf',
            size: '2.2 MB',
            icon: <PdfIcon />,
            type: 'pdf',
        },
        {
            id: 2,
            name: 'Moisture Meter Reading.xlsx',
            size: '2.2 MB',
            icon: <PdfIcon />,
            type: 'pdf',
        },
        {
            id: 3,
            name: 'Modern Laputa.jpg',
            size: '2.2 MB',
            icon: <PdfIcon />,
            type: 'pdf',
        },
        {
            id: 4,
            name: 'Lorem Ipsumi.pptx',
            size: '2.2 MB',
            icon: <PdfIcon />,
            type: 'pdf',
        },
        {
            id: 1,
            name: 'Front View Property.fig',
            size: '2.2 MB',
            icon: <PdfIcon />,
            type: 'pdf',
        },
        {
            id: 1,
            name: 'After Floor Remediation.docx',
            size: '2.2 MB',
            icon: <PdfIcon />,
            type: 'pdf',
        },
    ]

    const onDropdownItemClick = (eventKey: string, e: SyntheticEvent) => {
        console.log('Dropdown Item Clicked', eventKey, e)
    }

    const onDropdownClick = (e: SyntheticEvent) => {
        console.log('Dropdown Clicked', e)
    }

    return (
        <div>
            <Card>
                <Tabs value={currentTab} onChange={(val) => setCurrentTab(val)}>
                    <TabList>
                        <TabNav value="all">All Phots</TabNav>
                        <TabNav value="roofing">Roofing</TabNav>
                        <TabNav value="before">Before</TabNav>
                        <TabNav value="after">After</TabNav>
                        <TabNav value="damages">Damages</TabNav>
                    </TabList>
                    <div className="pt-[10px]">
                        <TabContent value="all">
                            <div>
                                <p className="text-xl font-bold">Files</p>
                                {layoutGrid ? (
                                    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-4 gap-4 lg:gap-6">
                                        {files.map((file) => (
                                            <Card>
                                                <div className="flex flex-row items-center justify-between relative">
                                                    <div className="flex flex-row gap-[10px] items-center">
                                                        {file.icon}
                                                        <div className="w-8/12">
                                                            <p className="truncate font-bold">
                                                                {file.name}
                                                            </p>
                                                            <p>{file.size}</p>
                                                        </div>
                                                    </div>
                                                    <div className="absolute right-0">
                                                        <Dropdown
                                                            title={
                                                                <HiDotsHorizontal />
                                                            }
                                                            onClick={
                                                                onDropdownClick
                                                            }
                                                            className=""
                                                        >
                                                            {dropdownItems.map(
                                                                (item) => (
                                                                    <Dropdown.Item
                                                                        key={
                                                                            item.key
                                                                        }
                                                                        eventKey={
                                                                            item.key
                                                                        }
                                                                        onSelect={
                                                                            onDropdownItemClick
                                                                        }
                                                                    >
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </Dropdown.Item>
                                                                ),
                                                            )}
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <Table className="mt-[10px]">
                                        <THead>
                                            <Tr className="border-b border-gray200">
                                                <Th>FILE</Th>
                                                <Th>SIZE</Th>
                                                <Th>TYPE</Th>
                                                <Th></Th>
                                            </Tr>
                                        </THead>
                                        <TBody>
                                            {files.map((file) => (
                                                <Tr>
                                                    <Td>
                                                        <div className="flex flex-row items-center gap-[5px]">
                                                            {file.icon}
                                                            <p>{file.name}</p>
                                                        </div>
                                                    </Td>
                                                    <Td>{file.size}</Td>
                                                    <Td>{file.type}</Td>
                                                </Tr>
                                            ))}
                                        </TBody>
                                    </Table>
                                )}
                            </div>
                        </TabContent>
                        <TabContent value="roofing">
                            <Card>
                                <h4 className="text-gray-700 ">
                                    No Files For This Specific Category
                                </h4>
                            </Card>
                        </TabContent>
                        <TabContent value="before">
                            <Card>
                                <h4 className="text-gray-700 ">
                                    No Files For This Specific Category
                                </h4>
                            </Card>
                        </TabContent>
                        <TabContent value="after">
                            <Card>
                                <h4 className="text-gray-700 ">
                                    No Files For This Specific Category
                                </h4>
                            </Card>
                        </TabContent>
                        <TabContent value="damages">
                            <Card>
                                <h4 className="text-gray-700 ">
                                    No Files For This Specific Category
                                </h4>
                            </Card>
                        </TabContent>
                    </div>
                </Tabs>
            </Card>
        </div>
    )
}

export default Photos
