import CardPaymentIcon from '@/assets/icons/CardPaymentIcon'
import CustomerDetailsIcon from '@/assets/icons/CustomerDetailsIcon'
import LocationPinIcon from '@/assets/icons/LocationPinIcon'
import ServicesIcon from '@/assets/icons/ServicesIcon'
import { Avatar, Button, Card, FormItem, Input, Table } from '@/components/ui'
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
import BottomStickyBar from '@/components/template/BottomStickyBar'
import { TbTrash } from 'react-icons/tb'

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

const paymentOptions: Option[] = [
    { value: 'pp', label: 'Paypal', imgPath: '/img/countries/US.png' },
    { value: 'vs', label: 'Visa', imgPath: '/img/countries/CN.png' },
    { value: 'st', label: 'Stripe', imgPath: '/img/countries/JP.png' },
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

const CreateEstimate = () => {
    const sideNavData = [
        {
            id: 1,
            link: 'selectProducts',
            title: 'Select Services',
            icon: <ServicesIcon />,
            desc: 'Add product to purchase list.',
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
            link: 'addressInformation',
            title: 'Address Information',
            icon: <LocationPinIcon />,
            desc: 'Provide shipping address details.',
        },
        {
            id: 4,
            link: 'payment',
            title: 'Payment',
            icon: <CardPaymentIcon />,
            desc: 'Enter payment method and details to complete the transaction.',
        },
    ]
    const services = [
        {
            id: '098359NT',
            name: 'Snövalla',
            price: 504.0,
            qty: 2,
        },
        {
            id: '098336NT',
            name: 'Maneki Neko Poster',
            price: 389.0,
            qty: 1,
        },
        {
            id: '098368NT',
            name: 'Ektöra',
            price: 869.0,
            qty: 1,
        },
    ]

    const total = services.reduce((acc, item) => acc + Number(item.price), 0)
    return (
        <main>
            <h1 className="text-2xl font-bold">Create Estimate Invoice</h1>
            <div className="flex xl:flex-row gap-4 mt-[20px] h-full">
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
                                    <Button variant="solid">
                                        Browse Services
                                    </Button>
                                </div>
                                <div>
                                    <Table>
                                        <THead>
                                            <Tr>
                                                <Th className="w-7/12">
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
                                                                    {service.id}
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
                                                            <div className="size-[40px] items-center flex justify-center col-span-1">
                                                                <p className="font-semibold p-2 border">
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
                                <FormItem label="Country" className="w-full">
                                    <div className="flex flex-row gap-4">
                                        <Select<Option>
                                            options={paymentOptions}
                                            components={{
                                                Option: CustomSelectOption,
                                                Control: CustomControl,
                                            }}
                                            defaultValue={paymentOptions[0]}
                                            className="w-full"
                                        />
                                    </div>
                                </FormItem>
                                <FormItem
                                    label="Paypal Email"
                                    className="w-full"
                                >
                                    <Input
                                        type="email"
                                        className="w-full"
                                        placeholder=""
                                    />
                                </FormItem>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <BottomStickyBar>
                <div className="flex flex-row ml-auto justify-end gap-2 px-[30px]">
                    <Button icon={<TbTrash />}>Delete</Button>
                    <Button variant="solid">Update</Button>
                </div>
            </BottomStickyBar>
        </main>
    )
}

export default CreateEstimate
