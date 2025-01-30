import CardPaymentIcon from '@/assets/icons/CardPaymentIcon'
import CustomerDetailsIcon from '@/assets/icons/CustomerDetailsIcon'
import LocationPinIcon from '@/assets/icons/LocationPinIcon'
import ServicesIcon from '@/assets/icons/ServicesIcon'
import {
    Avatar,
    Button,
    Card,
    FormItem,
    Input,
    Radio,
    Table,
    Upload,
} from '@/components/ui'
import { Container, DebouceInput } from '@/components/shared'
import Th from '@/components/ui/Table/Th'
import THead from '@/components/ui/Table/THead'
import TBody from '@/components/ui/Table/TBody'
import Tr from '@/components/ui/Table/Tr'
import Td from '@/components/ui/Table/Td'
import { MdOutlineSearch } from 'react-icons/md'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Select, { Option as DefaultOption } from '@/components/ui/Select'
import { components } from 'react-select'
import type { ControlProps, OptionProps } from 'react-select'
import { useState } from 'react'
import { HiOutlineCloudUpload } from 'react-icons/hi'
import UploadPhoto from '@/assets/icons/UploadPhoto'
import { useNavigate } from 'react-router-dom'

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

const countryOptions: Option[] = [
    { value: 'us', label: 'United States', imgPath: '/img/countries/US.png' },
    { value: 'cn', label: 'China', imgPath: '/img/countries/CN.png' },
    { value: 'jp', label: 'Japan', imgPath: '/img/countries/JP.png' },
    { value: 'fr', label: 'France', imgPath: '/img/countries/FR.png' },
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

const CreateOrder = () => {
    const [payMethod, setPayMethod] = useState('direct')
    const sideNavData = [
        {
            id: 1,
            link: 'selectProducts',
            title: 'Select Services',
            icon: <ServicesIcon />,
            desc: 'Water Damage Cleanup',
        },
        {
            id: 2,
            link: 'customerDetails',
            title: 'Customer details',
            icon: <CustomerDetailsIcon />,
            desc: 'Enter customer information like name, email & phone number.',
        },
        {
            id: 3,
            link: 'propertyInformation',
            title: 'Property Information',
            icon: <LocationPinIcon />,
            desc: 'Residential',
        },
        {
            id: 4,
            link: 'payment',
            title: 'Payment or Insurance Detail',
            icon: <CardPaymentIcon />,
            desc: 'Direct payment from the customer',
        },
    ]
    const services = [
        {
            desc: 'Water Damage Cleanup',
            name: 'Snövalla',
            price: 504.0,
            qty: 2,
        },
        {
            desc: 'Mold Testing',
            name: 'Maneki Neko Poster',
            price: 389.0,
            qty: 1,
        },
        {
            desc: 'Mold Remediation',
            name: 'Ektöra',
            price: 869.0,
            qty: 1,
        },
    ]

    const [radio1value, setRadio1Value] = useState('checking')
    const [radio2value, setRadio2Value] = useState('personal')

    const radio1onChange = (val: string) => {
        setRadio1Value(val)
    }
    const radio2onChange = (val: string) => {
        setRadio2Value(val)
    }

    const total = services.reduce((acc, item) => acc + Number(item.price), 0)

    const nav = useNavigate()

    return (
        <main>
            <h1 className="text-2xl font-bold">Create Job Order</h1>
            <div className="flex flex-row gap-4 mt-[20px] h-full">
                <Container className="w-[360px] h-auto relative xl:block hidden">
                    <Card className="w-[360px] sticky top-[80px]">
                        <div className="flex flex-col gap-4">
                            {sideNavData.map((nav) => (
                                <Link
                                    key={nav.id}
                                    activeClass="bg-gray-100 dark:bg-gray-700 active"
                                    className="cursor-pointer p-4 rounded-xl group hover:bg-gray-100 dark:hover:bg-gray-700"
                                    to={nav.link}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                >
                                    <span className="flex items-center gap-2">
                                        <Avatar
                                            icon={nav.icon}
                                            className="bg-gray-100 dark:bg-gray-700 group-hover:bg-white group-[.active]:bg-white dark:group-hover:bg-gray-800 dark:group-[.active]:bg-gray-800 heading-text "
                                        />
                                        <span className="flex flex-col flex-1">
                                            <span className="heading-text font-bold">
                                                {nav.title}
                                            </span>
                                            <span>{nav.desc}</span>
                                        </span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </Card>
                </Container>
                <div className="flex-1 ml-auto">
                    <div className="flex flex-col gap-[20px]">
                        <Card>
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-xl font-bold">
                                    Select Services
                                </p>
                                <div className="flex flex-row gap-2">
                                    <DebouceInput
                                        placeholder="Search Services"
                                        suffix={<MdOutlineSearch size={20} />}
                                    />
                                    <Button
                                        onClick={() => {
                                            nav('/overview/order-details')
                                        }}
                                        variant="solid"
                                    >
                                        Browse Services
                                    </Button>
                                </div>
                                <div>
                                    <Table>
                                        <THead>
                                            <Tr>
                                                <Th className="w-8/12">
                                                    SERVICES
                                                </Th>
                                                <Th>PRICE</Th>
                                                <Th className="">QUANTITY</Th>
                                            </Tr>
                                        </THead>
                                        <TBody>
                                            {services.map((service) => (
                                                <Tr>
                                                    <Td>
                                                        <div className="flex flex-row items-center gap-[10px]">
                                                            <Avatar
                                                                shape="square"
                                                                className="rounded-lg bg-gray-100"
                                                            />
                                                            <div>
                                                                <p className="font-bold">
                                                                    {
                                                                        service.name
                                                                    }
                                                                </p>
                                                                <p>
                                                                    ID:{' '}
                                                                    {
                                                                        service.desc
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Td>
                                                    <Td>
                                                        <p className="text-bold">
                                                            ${' '}
                                                            {service.price.toFixed(
                                                                2,
                                                            )}
                                                        </p>
                                                    </Td>
                                                    <Td>
                                                        <div className="grid grid-cols-3 items-center w-fit">
                                                            <Button
                                                                variant="default"
                                                                size="sm"
                                                                className="p-0 m-0 size-[40px] flex items-center justify-center col-span-1"
                                                            >
                                                                <FaMinus />
                                                            </Button>
                                                            <div className="size-[40px] items-center flex justify-center">
                                                                <p className="font-semibold">
                                                                    {
                                                                        service.qty
                                                                    }
                                                                </p>
                                                            </div>
                                                            <Button
                                                                variant="default"
                                                                size="sm"
                                                                className="p-0 m-0 size-[40px] flex items-center justify-center col-span-1"
                                                            >
                                                                <FaPlus />
                                                            </Button>
                                                        </div>
                                                    </Td>
                                                </Tr>
                                            ))}
                                        </TBody>
                                    </Table>
                                </div>
                                <div className="flex flex-row justify-end">
                                    <p className="font-semibold text-[16px]">
                                        Total:
                                        <span className="text-lg font-bold">
                                            {' '}
                                            ${total.toFixed(2)}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-xl font-bold">
                                    Customer details
                                </p>
                                <div className="grid grid-cols-2 gap-4 items-center w-full">
                                    <FormItem label="John Doe">
                                        <Input
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </FormItem>
                                    <FormItem label="User Name">
                                        <Input
                                            type="text"
                                            placeholder="Jhon_D"
                                        />
                                    </FormItem>
                                </div>
                                <FormItem label="Email" className="w-full">
                                    <Input
                                        type="email"
                                        placeholder="johnDoe@abc.com"
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
                                            className="mb-4"
                                        />
                                        <Input
                                            type="number"
                                            className="w-10/12"
                                        />
                                    </div>
                                </FormItem>
                            </div>
                        </Card>

                        <Card>
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-xl font-bold">
                                    Address Information
                                </p>
                                <FormItem label="Country" className="w-full">
                                    <div className="flex flex-row gap-4">
                                        <Select<Option>
                                            options={countryOptions}
                                            components={{
                                                Option: CustomSelectOption,
                                                Control: CustomControl,
                                            }}
                                            defaultValue={countryOptions[0]}
                                            className="w-full"
                                        />
                                    </div>
                                </FormItem>
                                <FormItem label="Address" className="w-full">
                                    <Input
                                        type="text"
                                        className="w-full"
                                        placeholder="ST 12345"
                                    />
                                </FormItem>
                                <div className="flex items-center w-full gap-4">
                                    <FormItem label="City" className="w-6/12">
                                        <Input
                                            type="text"
                                            className="w-full"
                                            placeholder="City"
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Postal Code"
                                        className="w-6/12"
                                    >
                                        <Input
                                            type="number"
                                            className="w-full"
                                            placeholder="Postal Code"
                                        />
                                    </FormItem>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-xl font-bold">Payment</p>
                                <FormItem
                                    label="Payment Method Select"
                                    className="w-full"
                                >
                                    <Select
                                        options={[
                                            {
                                                value: 'direct',
                                                label: 'Direct payment from the customer',
                                            },
                                            {
                                                value: 'claim',
                                                label: 'Insurance Claim',
                                            },
                                        ]}
                                        isSearchable={false}
                                        onChange={(e) => {
                                            setPayMethod(e.value)
                                        }}
                                        className="w-full"
                                        defaultValue={{
                                            value: 'direct',
                                            label: 'Direct payment from the customer',
                                        }}
                                    />
                                </FormItem>
                                {payMethod === 'claim' ? (
                                    <div>
                                        <div className="mb-4">
                                            <Upload>
                                                <button className="p-3 bg-primary-mild text-white flex flex-row items-center rounded-xl gap-[10px] font-bold">
                                                    <HiOutlineCloudUpload
                                                        size={20}
                                                    />
                                                    Upload your file
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
                                                            Drop your file here,
                                                            or{' '}
                                                        </span>
                                                        <span className="text-blue-500">
                                                            browse
                                                        </span>
                                                    </p>
                                                    <p className="mt-1 opacity-60 dark:text-white">
                                                        Support: pdf, xlsx, csv
                                                    </p>
                                                </div>
                                            </Upload>
                                        </div>
                                        <div className="mt-4">
                                            <FormItem label="Claim Number">
                                                <Input placeholder="Claim Number" />
                                            </FormItem>
                                        </div>
                                        <div className="flex flex-row items-center gap-4">
                                            <FormItem
                                                className="w-6/12"
                                                label="Policy Number"
                                            >
                                                <Input
                                                    type="number"
                                                    placeholder="Policy Number"
                                                />
                                            </FormItem>
                                            <FormItem
                                                className="w-6/12"
                                                label="Insurance Company Name"
                                            >
                                                <Input
                                                    type="text"
                                                    placeholder="Insurance Company Name"
                                                />
                                            </FormItem>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="flex flex-row items-center gap-4">
                                            <FormItem
                                                className="w-6/12"
                                                label="Name on Bank Account"
                                            >
                                                <Input
                                                    type="text"
                                                    placeholder="Name on Bank Account"
                                                />
                                            </FormItem>
                                            <FormItem
                                                className="w-6/12"
                                                label="Bank Name"
                                            >
                                                <Input
                                                    type="text"
                                                    placeholder="Bank Name"
                                                />
                                            </FormItem>
                                        </div>
                                        <div className="flex flex-row items-center gap-4">
                                            <FormItem
                                                className="w-6/12"
                                                label="Routing Number"
                                            >
                                                <Input
                                                    type="number"
                                                    placeholder="Routing Number"
                                                />
                                            </FormItem>
                                            <FormItem
                                                className="w-6/12"
                                                label="Account Number"
                                            >
                                                <Input
                                                    type="number"
                                                    placeholder="Account Number"
                                                />
                                            </FormItem>
                                        </div>
                                        <div className="flex flex-row items-center gap-4">
                                            <FormItem
                                                className="w-6/12"
                                                label="Account Type"
                                            >
                                                <Radio.Group
                                                    value={radio1value}
                                                    onChange={radio1onChange}
                                                >
                                                    <Radio value={'checking'}>
                                                        Checking
                                                    </Radio>
                                                    <Radio value={'savings'}>
                                                        Savings
                                                    </Radio>
                                                </Radio.Group>
                                            </FormItem>
                                            <FormItem
                                                className="w-6/12"
                                                label="Account Number"
                                            >
                                                <Radio.Group
                                                    value={radio2value}
                                                    onChange={radio2onChange}
                                                >
                                                    <Radio value={'personal'}>
                                                        Personal
                                                    </Radio>
                                                    <Radio value={'business'}>
                                                        Business
                                                    </Radio>
                                                </Radio.Group>
                                            </FormItem>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CreateOrder
