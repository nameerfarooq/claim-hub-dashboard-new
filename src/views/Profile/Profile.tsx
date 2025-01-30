import BellIcon from '@/assets/icons/BellIcon'
import BillingIcon from '@/assets/icons/BillingIcon'
import CustomerDetailsIcon from '@/assets/icons/CustomerDetailsIcon'
import LockIcon from '@/assets/icons/LockIcon'
import { Container } from '@/components/shared'
import {
    Avatar,
    Button,
    Card,
    FormItem,
    Input,
    Table,
    Tag,
} from '@/components/ui'
import React, { useState } from 'react'
import Select, { Option as DefaultOption } from '@/components/ui/Select'
import { Link } from 'react-scroll'
import user from '@/assets/Images/userBig.png'
import { FaPlus } from 'react-icons/fa'
import { Option } from '@/components/ui/Select'
import { components, ControlProps, OptionProps } from 'react-select'
import THead from '@/components/ui/Table/THead'
import Th from '@/components/ui/Table/Th'
import Tr from '@/components/ui/Table/Tr'
import TBody from '@/components/ui/Table/TBody'
import Td from '@/components/ui/Table/Td'
import visa from '@/assets/Images/visa.png'
import debit from '@/assets/Images/debit.png'
import { TbPlus } from 'react-icons/tb'

type Option = {
    value: string
    label: string
    imgPath: string
}

const { Control } = components

const countryPhoneOptions: Option[] = [
    { value: 'us', label: '+1', imgPath: '/img/countries/US.png' },
    { value: 'cn', label: '+86', imgPath: '/img/countries/CN.png' },
    { value: 'jp', label: '+81', imgPath: '/img/countries/JP.png' },
    { value: 'fr', label: '+33', imgPath: '/img/countries/FR.png' },
]

const CustomSelectOption = (props: OptionProps<Option>) => {
    return (
        <DefaultOption<Option>
            {...props}
            customLabel={(data, label) => (
                <span className="flex items-center gap-2">
                    <Avatar shape="circle" size={20} src={data.imgPath} />
                    <span className="ml-2 rtl:mr-2">{label}</span>
                </span>
            )}
        />
    )
}

const CustomControl = ({ children, ...props }: ControlProps<Option>) => {
    const selected = props.getValue()[0]
    return (
        <Control {...props}>
            {selected && (
                <Avatar
                    className="ltr:ml-4 rtl:mr-4"
                    shape="circle"
                    size={18}
                    src={selected.imgPath}
                />
            )}
            {children}
        </Control>
    )
}

const Main = () => {
    const [activeLink, setActiveLink] = useState('profile')
    const sideNavData = [
        {
            id: 1,
            link: 'profile',
            title: 'Profile',
            icon: <CustomerDetailsIcon />,
        },
        {
            id: 2,
            link: 'security',
            title: 'Security',
            icon: <LockIcon />,
            desc: 'Enter customer information like name, email & phone number.',
        },
        {
            id: 3,
            link: 'notification',
            title: 'Notification',
            icon: <BellIcon />,
        },
        {
            id: 4,
            link: 'billing',
            title: 'Billing',
            icon: <BillingIcon />,
        },
    ]
    const paymentData = [
        {
            img: visa,
            name: 'Carolyn Perkins •••• 0392',
            expiry: 'Dec 2025',
            primary: true,
        },
        {
            img: debit,
            name: 'Carolyn Perkins •••• 8461',
            expiry: 'Jun 2025',
            primary: false,
        },
    ]
    const transactionData = [
        {
            refNo: '#36223',
            product: 'Mock premium pack',
            status: 'Pending',
            date: '12/10/2021',
            amt: 39.9,
        },
        {
            refNo: '#36223',
            product: 'Mock premium pack',
            status: 'Pending',
            date: '12/10/2021',
            amt: 39.9,
        },
        {
            refNo: '#36223',
            product: 'Mock premium pack',
            status: 'Pending',
            date: '12/10/2021',
            amt: 39.9,
        },
        {
            refNo: '#36223',
            product: 'Mock premium pack',
            status: 'Pending',
            date: '12/10/2021',
            amt: 39.9,
        },
    ]
    return (
        <Container>
            <Card>
                <div className="flex flex-col xl:flex-row gap-4">
                    <div className="w-[220px]">
                        {' '}
                        <div className="flex flex-col gap-2">
                            {sideNavData.map((nav) => (
                                <p
                                    onClick={() => setActiveLink(nav.link)}
                                    className={` cursor-pointer p-2 rounded group hover:bg-gray-100 dark:hover:bg-gray-700 ${activeLink === nav.link ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className=" ">{nav.icon}</span>
                                        <span className="flex flex-col flex-1">
                                            <span className="heading-text font-bold">
                                                {nav.title}
                                            </span>
                                        </span>
                                    </div>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        {activeLink === 'profile' ? (
                            <div className="flex flex-col gap-4">
                                <p className="text-xl font-bold mb-2">
                                    Personal Information
                                </p>
                                <div className="flex flex-row items-center gap-4">
                                    <Avatar
                                        className="border-4 border-white shadow-lg shadow-black/20"
                                        shape="circle"
                                        src={user}
                                        size={90}
                                    />
                                    <div className="flex flex-row items-center gap-2">
                                        <button className="flex items-center gap-2 border border-primary rounded-xl p-3 font-bold text-white bg-primary hover:bg-primary-deep">
                                            <span>
                                                <FaPlus
                                                    className="text-white"
                                                    size={20}
                                                />
                                            </span>
                                            Upload Image
                                        </button>
                                        <Button variant="default">
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-row gap-3 w-full">
                                        <FormItem
                                            label="First Name"
                                            className="w-6/12"
                                        >
                                            <Input placeholder="First Name" />
                                        </FormItem>

                                        <FormItem
                                            className="w-6/12"
                                            label="Role"
                                        >
                                            <Select
                                                defaultValue={{
                                                    value: 'admin',
                                                    label: 'Admin',
                                                }}
                                                isSearchable={false}
                                                placeholder="First Name"
                                                options={[
                                                    {
                                                        value: 'admin',
                                                        label: 'Admin',
                                                    },
                                                    {
                                                        value: 'user',
                                                        label: 'User',
                                                    },
                                                ]}
                                            />
                                        </FormItem>
                                    </div>
                                    <FormItem label="Email" className="w-full">
                                        <Input
                                            placeholder="Email"
                                            type="email"
                                        />
                                    </FormItem>
                                    <FormItem label="Phone" className="w-full">
                                        <div className="flex flex-row gap-4">
                                            <Select<Option>
                                                options={countryPhoneOptions}
                                                components={{
                                                    Option: CustomSelectOption,
                                                    Control: CustomControl,
                                                }}
                                                defaultValue={
                                                    countryPhoneOptions[0]
                                                }
                                                className="w-2/12"
                                            />
                                            <Input
                                                type="number"
                                                className="w-10/12"
                                            />
                                        </div>
                                    </FormItem>
                                </div>
                                <div className="ml-auto w-fit p-2">
                                    <Button variant="solid">Save</Button>
                                </div>
                            </div>
                        ) : activeLink === 'security' ? (
                            <div>No Flow</div>
                        ) : activeLink === 'notification' ? (
                            <div>No Flow</div>
                        ) : (
                            <div className="flex flex-col gap-[30px]">
                                <p className="text-xl font-bold">Billing</p>
                                <Card className="border-0 bg-gray-100 ">
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="flex flex-row items-center gap-4">
                                            <Avatar src={user} />
                                            <div>
                                                <p className="font-bold text-[16px]">
                                                    Business board basic
                                                    <span>
                                                        {' '}
                                                        <Tag className="bg-gray-200">
                                                            Active
                                                        </Tag>
                                                    </span>
                                                </p>
                                                <p className="font-semibold text-sm">
                                                    Billing monthly| Next
                                                    payment on 02/10/2025 for{' '}
                                                    <span className="font-bold">
                                                        $59.90
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <Button variant="solid">
                                            Change plan
                                        </Button>
                                    </div>
                                </Card>
                                <div>
                                    <p className="font-bold text-lg mb-3">
                                        Payment method
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        {paymentData.map((item) => (
                                            <div className="flex flex-row items-center justify-between">
                                                <div className="flex flex-row items-center gap-4">
                                                    <img
                                                        src={item.img}
                                                        alt={'Visa'}
                                                        className="h-auto"
                                                    />
                                                    <div>
                                                        <p className="font-bold">
                                                            {item.name}{' '}
                                                            {item.primary && (
                                                                <span>
                                                                    {' '}
                                                                    <Tag className="bg-gray-100">
                                                                        Primary
                                                                    </Tag>{' '}
                                                                </span>
                                                            )}{' '}
                                                        </p>
                                                        <p>
                                                            Expired on{' '}
                                                            {item.expiry}
                                                        </p>
                                                    </div>
                                                </div>
                                                <Button>Edit</Button>
                                            </div>
                                        ))}
                                        <button className="flex flex-row items-center w-fit font-bold gap-1 text-black">
                                            {' '}
                                            <TbPlus size={20} /> Add payment
                                            method{' '}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-lg mb-3">
                                        Transaction history
                                    </p>
                                    <div>
                                        <Table>
                                            <THead className="!bg-transparent">
                                                <Tr>
                                                    <Th>REFERENCE</Th>
                                                    <Th>PRODUCT</Th>
                                                    <Th>STATUS</Th>
                                                    <Th>DATE</Th>
                                                    <Th>AMOUNT</Th>
                                                </Tr>
                                            </THead>
                                            <TBody>
                                                {transactionData.map((item) => (
                                                    <Tr>
                                                        <Td>
                                                            <p className="font-bold">
                                                                {item.refNo}
                                                            </p>
                                                        </Td>
                                                        <Td>
                                                            <p className="font-bold">
                                                                {item.product}
                                                            </p>
                                                        </Td>
                                                        <Td>
                                                            <div
                                                                className={`flex flex-row items-center gap-2 font-bold ${item.status === 'Paid' ? 'text-green-300' : 'text-red-300'} `}
                                                            >
                                                                <span
                                                                    className={`size-[12px] rounded-full ${item.status === 'Paid' ? 'bg-green-300' : 'bg-red-300'}`}
                                                                />
                                                                {item.status}
                                                            </div>
                                                        </Td>
                                                        <Td>
                                                            <p>{item.date}</p>
                                                        </Td>
                                                        <Td>
                                                            <p>
                                                                $
                                                                {item.amt.toFixed(
                                                                    2,
                                                                )}
                                                            </p>
                                                        </Td>
                                                    </Tr>
                                                ))}
                                            </TBody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Card>
        </Container>
    )
}

export default Main
