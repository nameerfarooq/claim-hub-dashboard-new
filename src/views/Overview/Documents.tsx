import UploadGradient from '@/assets/icons/UploadGradient'
import FilterDialog from '@/components/custom/FilterDialog'
import { DebouceInput, TableRowSkeleton } from '@/components/shared'
import { Button, Card, Dropdown, Segment, Table, Upload } from '@/components/ui'
import { HiDotsHorizontal, HiOutlineCloudUpload } from 'react-icons/hi'
import { IoCodeSlash, IoGridOutline, IoListOutline } from 'react-icons/io5'
import { TbSearch } from 'react-icons/tb'
import TabContent from '@/components/ui/Tabs/TabContent'
import TabList from '@/components/ui/Tabs/TabList'
import TabNav from '@/components/ui/Tabs/TabNav'
import Tabs from '@/components/ui/Tabs/Tabs'
import { SyntheticEvent, useState } from 'react'
import PdfIcon from '@/assets/icons/PdfIcon'
import Th from '@/components/ui/Table/Th'
import THead from '@/components/ui/Table/THead'
import TBody from '@/components/ui/Table/TBody'
import Tr from '@/components/ui/Table/Tr'
import Td from '@/components/ui/Table/Td'
import UploadPhoto from '@/assets/icons/UploadPhoto'
import FolderIcon from '@/assets/icons/FolderIcon'
import { RiFileCopy2Line } from 'react-icons/ri'

const Documents = () => {
    const [currentTab, setCurrentTab] = useState('all')
    const [layoutGrid, setLayoutGrid] = useState(true)

    const dropdownItems = [
        { key: 'a', name: 'Item A' },
        { key: 'b', name: 'Item B' },
        { key: 'c', name: 'Item C' },
        { key: 'd', name: 'Item D' },
    ]

    const floorPlans = [
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
            id: 5,
            name: 'Front View Property.fig',
            size: '2.2 MB',
            icon: <PdfIcon />,
            type: 'pdf',
        },
        {
            id: 6,
            name: 'After Floor Remediation.docx',
            size: '2.2 MB',
            icon: <PdfIcon />,
            type: 'pdf',
        },
    ]

    const reports = [
        {
            id: 1,
            name: 'Inspection_Report-Damage.pdf',
            size: '2.2 MB',
            icon: <PdfIcon />,
            type: 'pdf',
        },
        {
            id: 2,
            name: 'Mold_Testing_Report_#67890.pdf',
            size: '2.2 MB',
            icon: <PdfIcon />,
            type: 'pdf',
        },
        {
            id: 3,
            name: 'Moisture_Reading_Summary.pdf',
            size: '2.2 MB',
            icon: <PdfIcon />,
            type: 'pdf',
        },
        {
            id: 4,
            name: 'Final_Work_Completion.pdf',
            size: '2.2 MB',
            icon: <PdfIcon />,
            type: 'pdf',
        },
        {
            id: 5,
            name: 'Structural_Damage.pdf',
            size: '2.2 MB',
            icon: <PdfIcon />,
            type: 'pdf',
        },
        {
            id: 6,
            name: 'Inspection_Report-Damage.pdf',
            size: '2.2 MB',
            icon: <PdfIcon />,
            type: 'pdf',
        },
    ]

    const contracts = [
        {
            id: 1,
            name: 'Client_Agreement_#12345',
            size: '2.2 MB',
            icon: <FolderIcon />,
            type: 'folder',
        },
        {
            id: 2,
            name: 'Insurance_Approval_Contract',
            size: '2.2 MB',
            icon: <FolderIcon />,
            type: 'folder',
        },
        {
            id: 3,
            name: 'Direct_Payment_Agreement',
            size: '2.2 MB',
            icon: <FolderIcon />,
            type: 'folder',
        },
        {
            id: 4,
            name: 'Signed_Client_11-26-2024',
            size: '2.2 MB',
            icon: <FolderIcon />,
            type: 'folder',
        },
    ]

    const onDropdownItemClick = (eventKey: string, e: SyntheticEvent) => {
        console.log('Dropdown Item Clicked', eventKey, e)
    }

    const onDropdownClick = (e: SyntheticEvent) => {
        console.log('Dropdown Clicked', e)
    }

    return (
        <main className="flex flex-col gap-[30px]">
            <div className="flex flex-row items-center justify-between">
                <p className="font-bold text-2xl">Documents Management</p>
                <div className="flex flex-row gap-[20px]">
                    <DebouceInput
                        value={''}
                        placeholder="Quick search..."
                        prefix={<TbSearch className="text-lg" />}
                        onChange={(e) => console.log(e)}
                    />
                    <FilterDialog />
                    <Segment
                        defaultValue={'grid'}
                        onChange={() => setLayoutGrid(!layoutGrid)}
                    >
                        <Segment.Item
                            activeClassName="bg-primary-mild text-white"
                            inactiveClassName="text-primary-mild"
                            className="text-xl"
                            value="grid"
                        >
                            <IoGridOutline />
                        </Segment.Item>
                        <Segment.Item
                            className="text-xl"
                            activeClassName="bg-primary-mild text-white"
                            inactiveClassName="text-primary-mild"
                            value="list"
                        >
                            <IoListOutline />
                        </Segment.Item>
                    </Segment>
                </div>
            </div>
            <Card
                footer={{
                    content: (
                        <div className="flex flex-row w-fit ml-auto">
                            <button className="px-2 py-1 text-black">
                                <RiFileCopy2Line size={16} />
                            </button>
                            <button className="px-2 py-1 text-black">
                                <IoCodeSlash size={16} />
                            </button>
                        </div>
                    ),
                    className: 'bg-gray-100 flex items-end  rounded-b-2xl',
                    bordered: true,
                }}
            >
                <div className="mb-4">
                    <Upload>
                        <button className="p-3 bg-primary-mild text-white flex flex-row items-center rounded-xl gap-[10px] font-bold">
                            <HiOutlineCloudUpload size={20} />
                            Upload your Documents
                        </button>
                    </Upload>
                </div>
                <div>
                    <Upload draggable>
                        <div className="my-16 text-center">
                            <div className="text-6xl mb-4 flex justify-center">
                                <UploadPhoto />
                            </div>
                            <p className="font-semibold">
                                <span className="text-gray-800 dark:text-white">
                                    Drop your file here, or{' '}
                                </span>
                                <span className="text-blue-500">browse</span>
                            </p>
                            <p className="mt-1 opacity-60 dark:text-white">
                                Support: pdf, xlsx, csv
                            </p>
                        </div>
                    </Upload>
                </div>
            </Card>
            <div className="">
                <div className="w-fit ml-auto">
                    <Button className="" variant="solid">
                        Add New Category
                    </Button>
                </div>
                <Tabs value={currentTab} onChange={(val) => setCurrentTab(val)}>
                    <TabList>
                        <TabNav value="all">All Documents</TabNav>
                        <TabNav value="roofing">Scope of Work</TabNav>
                        <TabNav value="before">Insurance Policies</TabNav>
                        <TabNav value="after">Invoices</TabNav>
                        <TabNav value="damages">Project Documentation</TabNav>
                        <TabNav value="damages">Reports</TabNav>
                    </TabList>
                    <div className="pt-[10px]">
                        <TabContent value="all">
                            <div className="flex flex-col gap-[20px]">
                                <div className="mt-[10px]">
                                    <p className="text-xl font-bold">
                                        Contracts
                                    </p>
                                    {layoutGrid ? (
                                        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-4 gap-4 lg:gap-6">
                                            {contracts.map((contract) => (
                                                <Card>
                                                    <div className="flex flex-row items-center justify-between relative">
                                                        <div className="flex flex-row gap-[10px] items-center">
                                                            {contract.icon}
                                                            <div className="w-8/12">
                                                                <p className="truncate font-bold">
                                                                    {
                                                                        contract.name
                                                                    }
                                                                </p>
                                                                <p>
                                                                    {
                                                                        contract.size
                                                                    }
                                                                </p>
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
                                                {contracts.map((contract) => (
                                                    <Tr>
                                                        <Td>
                                                            <div className="flex flex-row items-center gap-[5px]">
                                                                {contract.icon}
                                                                <p>
                                                                    {
                                                                        contract.name
                                                                    }
                                                                </p>
                                                            </div>
                                                        </Td>
                                                        <Td>{contract.size}</Td>
                                                        <Td>{contract.type}</Td>
                                                    </Tr>
                                                ))}
                                            </TBody>
                                        </Table>
                                    )}
                                </div>

                                <div>
                                    <p className="text-xl font-bold">Reports</p>
                                    {layoutGrid ? (
                                        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-4 gap-4 lg:gap-6">
                                            {reports.map((reports) => (
                                                <Card>
                                                    <div className="flex flex-row items-center justify-between relative">
                                                        <div className="flex flex-row gap-[10px] items-center">
                                                            {reports.icon}
                                                            <div className="w-8/12">
                                                                <p className="truncate font-bold">
                                                                    {
                                                                        reports.name
                                                                    }
                                                                </p>
                                                                <p>
                                                                    {
                                                                        reports.size
                                                                    }
                                                                </p>
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
                                                {reports.map((reports) => (
                                                    <Tr>
                                                        <Td>
                                                            <div className="flex flex-row items-center gap-[5px]">
                                                                {reports.icon}
                                                                <p>
                                                                    {
                                                                        reports.name
                                                                    }
                                                                </p>
                                                            </div>
                                                        </Td>
                                                        <Td>{reports.size}</Td>
                                                        <Td>{reports.type}</Td>
                                                    </Tr>
                                                ))}
                                            </TBody>
                                        </Table>
                                    )}
                                </div>

                                <div>
                                    <p className="text-xl font-bold">
                                        Floor Plans
                                    </p>
                                    {layoutGrid ? (
                                        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-4 gap-4 lg:gap-6">
                                            {floorPlans.map((plan) => (
                                                <Card>
                                                    <div className="flex flex-row items-center justify-between relative">
                                                        <div className="flex flex-row gap-[10px] items-center">
                                                            {plan.icon}
                                                            <div className="w-8/12">
                                                                <p className="truncate font-bold">
                                                                    {plan.name}
                                                                </p>
                                                                <p>
                                                                    {plan.size}
                                                                </p>
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
                                                {floorPlans.map((plan) => (
                                                    <Tr>
                                                        <Td>
                                                            <div className="flex flex-row items-center gap-[5px]">
                                                                {plan.icon}
                                                                <p>
                                                                    {plan.name}
                                                                </p>
                                                            </div>
                                                        </Td>
                                                        <Td>{plan.size}</Td>
                                                        <Td>{plan.type}</Td>
                                                    </Tr>
                                                ))}
                                            </TBody>
                                        </Table>
                                    )}
                                </div>
                            </div>
                        </TabContent>
                    </div>
                </Tabs>
            </div>
        </main>
    )
}

export default Documents
