import { Container } from '@/components/shared'
import { Card, Menu, Segment, Switcher } from '@/components/ui'
import React, { useState } from 'react'
import { IoMdCheckmark } from 'react-icons/io'
import classNames from '@/utils/classNames'
import { motion, AnimatePresence } from 'framer-motion'
import { TbMinus, TbPlus } from 'react-icons/tb'
import isLastChild from '@/utils/isLastChild'

type QuestionProps = {
    title: string
    content: string
    defaultExpand: boolean
    border: boolean
    isFirstChild: boolean
}

const Question = (props: QuestionProps) => {
    const { title, content, defaultExpand, border, isFirstChild } = props

    const [expand, setExpand] = useState(defaultExpand)

    return (
        <div
            className={classNames(
                'flex flex-col w-full',
                border && 'border-b gray-200 dark:border-gray-700',
                isFirstChild ? 'pb-6' : 'py-6',
            )}
        >
            <div
                className="flex items-center gap-4 transition-colors h6 font-semibold cursor-pointer group"
                role="button"
                onClick={() => setExpand(!expand)}
            >
                <span className="text-2xl">
                    {expand ? <TbPlus /> : <TbMinus />}
                </span>
                <span className="group-hover:text-primary">{title}</span>
            </div>
            <AnimatePresence>
                {expand && (
                    <motion.div
                        className="mt-4 ltr:ml-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const Pricing = () => {
    const [selectedCategory, setSelectedCategory] = useState('subscription')

    const questionCategory = {
        subscription: 'Subscription details',
        billing: 'Billing and payments',
        others: 'Other',
    }

    const questionList = {
        subscription: [
            {
                title: 'How do I sign up for a subscription?',
                content:
                    'Select the plan above with your preferred subscription plan, and follow the on-screen instructions to create an account and enter your payment details.',
                defaultExpand: true,
            },
            {
                title: 'Can I cancel my subscription?',
                content:
                    'Yes, you have the flexibility to cancel your subscription at any time. To cancel, simply log in to your account, navigate to the "Subscription" section, and follow the instructions to cancel your plan. Your cancellation will take effect at the end of your current billing cycle.',
                defaultExpand: false,
            },

            {
                title: 'Can I switch my subscription plan?',
                content:
                    'Absolutely, you can switch between the monthly and annual plans at any time. To change your subscription plan, log in to your account, go to the "Subscription" section, select the plan you want to switch to, and follow the instructions. Your new plan will take effect immediately.',
                defaultExpand: false,
            },
            {
                title: 'Do you offer a free trial?',
                content:
                    'Yes, we provide a 14-day free trial for new users. During this period, you can access all the features of our subscription plan. If you continue after the trial, you will be charged based on the plan you selected.',
                defaultExpand: false,
            },
            {
                title: 'How do I know when my subscription is about to renew?',
                content:
                    'You will receive an email notification a few days before your subscription is set to renew, reminding you of the upcoming charge and providing an option to make any necessary changes.',
                defaultExpand: false,
            },
            {
                title: 'Are there any discounts for students or non-profits?',
                content:
                    'Yes, we offer special discounts for students and non-profits. Please contact our support team with the relevant documentation to apply for these discounts.',
                defaultExpand: false,
            },
        ],
        billing: [
            {
                title: 'What payment methods do you accept?',
                content:
                    'We strive to make the payment process as convenient as possible by accepting a variety of payment methods. These include major credit and debit cards such as Visa, MasterCard, and American Express, as well as PayPal. Depending on your location, additional regional payment methods may also be available.',
                defaultExpand: true,
            },
            {
                title: 'What happens if my payment fails?',
                content:
                    'If your payment fails, we will notify you via email. You will then have a grace period of 7 days to update your payment information. If the payment issue is not resolved within this period, your subscription will be temporarily suspended until the payment is successfully processed.',
                defaultExpand: false,
            },
            {
                title: 'How do I update my payment information?',
                content:
                    'To update your payment information, log in to your account, go to the "Billing" section, and enter your new payment details. Make sure to save the changes to ensure continuous service.',
                defaultExpand: false,
            },
            {
                title: 'Will I get a refund if I cancel my subscription?',
                content:
                    'Refund policies vary depending on your subscription type. For our Monthly Plan, we do not offer refunds. However, for the Annual Plan, you may be eligible for a prorated refund if you cancel within the first 30 days of your subscription. Please contact our support team for assistance with this process.',
                defaultExpand: false,
            },
        ],
        others: [
            {
                title: 'How do I contact customer support?',
                content:
                    'Our customer support team is here to help with any questions or issues you may have. You can reach us by emailing support@ecme.com, calling our support line at 1-800-123-4567, or using the live chat feature on our website. We are committed to providing you with prompt and effective assistance.',
                defaultExpand: true,
            },
            {
                title: 'How do I change my account details?',
                content:
                    'To update your account details, log in to your account, navigate to the "Security" section, and make the necessary changes. Be sure to save your updates.',
                defaultExpand: false,
            },
            {
                title: 'Is my personal information secure?',
                content:
                    'Yes, we prioritize the security of your personal information. Our site uses industry-standard encryption and security measures. Please refer to our Privacy Policy for more details on how we protect your data.',
                defaultExpand: false,
            },
        ],
    }

    const pkgdetails = [
        {
            name: 'Basic',
            desc: 'Ideal for individuals or small teams. Includes essential task and project management features.',
            price: 59,
            list: [
                'Task management',
                'Basic management tools',
                'Report generator',
                'Email support',
            ],
            recommended: false,
        },
        {
            name: 'Standard',
            desc: 'Perfect for growing teams. Offers advanced features for better productivity and collaboration.',
            price: 79,
            list: [
                'Task management',
                'Advance management tools',
                'Report generator',
                'Chat & email support',
                'Files sharing',
            ],
            recommended: false,
        },
        {
            name: 'Pro',
            desc: 'Best for large teams. Includes premium features and dedicated support for optimal workflow.',
            price: 129,
            list: [
                'Task management',
                'Basic management tools',
                'Detailed report generator',
                '24/7 chat & email support',
                'Files sharing',
                'Advanced security protocols',
                'Third party service integration',
            ],
            recommended: true,
        },
    ]

    return (
        <Container className="flex flex-col gap-4">
            <div className="w-full h-auto p-[1px] bg-gradient-to-t from-[#692EE3] to-[#2B84FF] rounded-[18px] relative">
                <Card className="w-full">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-2xl font-bold">Pricing</p>
                        <Segment className="p-0" defaultValue={'monthly'}>
                            <Segment.Item
                                activeClassName="bg-gradient-to-t from-[#692EE3] to-[#2B84FF] text-white"
                                inactiveClassName="bg-gray-100 text-gray-400 font-bold"
                                value="monthly"
                            >
                                Monthly
                            </Segment.Item>
                            <Segment.Item
                                activeClassName="bg-gradient-to-t from-[#692EE3] to-[#2B84FF] text-white"
                                inactiveClassName="bg-gray-100 text-gray-400 font-bold"
                                value="yearly"
                            >
                                Annualy
                            </Segment.Item>
                        </Segment>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-between mt-[30px] xl:divide-x divide-primary-deep h-full">
                        {pkgdetails.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-4 w-full xl:w-4/12 p-4"
                            >
                                <div className="flex flex-row gap-2 items-center">
                                    <p className="text-lg font-bold">
                                        {item.name}
                                    </p>
                                    {item.recommended && (
                                        <p className="bg-gradient-to-t fr from-[#692EE3] to-[#2B84FF] text-white px-2 rounded-full text-sm font-bold">
                                            Recommended
                                        </p>
                                    )}
                                </div>
                                <p className="text-sm">{item.desc}</p>
                                <div className="pb-5 border-b-[1px] border-gray-100">
                                    <p className="text-4xl font-bold">
                                        ${item.price}
                                        <span className="text-lg font-bold">
                                            /month
                                        </span>
                                    </p>
                                </div>
                                <div className="h-full">
                                    <ul>
                                        {item.list.map((list, index) => (
                                            <li
                                                key={index}
                                                className="flex flex-row gap-3 items-center py-2"
                                            >
                                                <span>
                                                    <IoMdCheckmark
                                                        size={20}
                                                        className="text-green-500"
                                                    />
                                                </span>
                                                <p className="text-sm font-semibold">
                                                    {list}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="justify-self-end my-4">
                                    <button className="shadow-xl bg-gradient-to-t from-[#692EE3] to-[#2B84FF] text-white px-4 py-2 rounded-lg w-full text-xl font-bold">
                                        Select Plan
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
            <Card>
                <h3 className="mt-2">FAQ</h3>
                <div className="flex flex-col md:flex-row gap-4 md:gap-20 mt-8">
                    <div className="min-w-[230px]">
                        <Menu>
                            {Object.entries(questionList).map(([key]) => (
                                <Menu.MenuItem
                                    key={key}
                                    isActive={key === selectedCategory}
                                    eventKey={key}
                                    onSelect={setSelectedCategory}
                                >
                                    {questionCategory[key]}
                                </Menu.MenuItem>
                            ))}
                        </Menu>
                    </div>
                    <div className="max-w-[800px] my-2">
                        <div className="">
                            {questionList[selectedCategory].map(
                                (question, index) => (
                                    <Question
                                        key={question.title}
                                        border={
                                            !isLastChild(
                                                questionList[selectedCategory],
                                                index,
                                            )
                                        }
                                        isFirstChild={index === 0}
                                        {...question}
                                    />
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </Card>
        </Container>
    )
}

export default Pricing
