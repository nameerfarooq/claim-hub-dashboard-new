import { useState } from 'react'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import type { MouseEvent } from 'react'
import { CiFilter } from 'react-icons/ci'
import { Menu } from '../ui'
import MenuCollapse from '../ui/Menu/MenuCollapse'
import MenuItem from '../ui/Menu/MenuItem'
import Checkbox from '../ui/Checkbox/Checkbox'

const FilterDialog = ({ subStage }) => {
    const [dialogIsOpen, setIsOpen] = useState(false)

    const openDialog = () => {
        setIsOpen(true)
    }

    const onDialogClose = (e: MouseEvent) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const onDialogOk = (e: MouseEvent) => {
        console.log('onDialogOk', e)
        setIsOpen(false)
    }

    return (
        <div>
            <Button
                variant="default"
                icon={<CiFilter />}
                color="primary"
                onClick={openDialog}
            >
                Filter
            </Button>
            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <h5 className="mb-4">Filter</h5>
                <div className="space-y-4 flex flex-col max-h-[60vh] overflow-auto">
                    <Menu>
                        <MenuCollapse label="Type">
                            <div className="flex flex-col">
                                <MenuItem eventKey="1">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Hurricane
                                    </Checkbox>
                                </MenuItem>
                                <MenuItem eventKey="2">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Storm
                                    </Checkbox>
                                </MenuItem>
                                <MenuItem eventKey="3">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Fire
                                    </Checkbox>
                                </MenuItem>
                                <MenuItem eventKey="4">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Mold
                                    </Checkbox>
                                </MenuItem>
                                <MenuItem eventKey="5">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        In Progress
                                    </Checkbox>
                                </MenuItem>
                                <MenuItem eventKey="6">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Hold
                                    </Checkbox>
                                </MenuItem>
                                <MenuItem eventKey="7">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Follow Up
                                    </Checkbox>
                                </MenuItem>
                            </div>
                        </MenuCollapse>
                        <MenuCollapse label="Stage">
                            <div className="flex flex-col">
                                <MenuItem eventKey="1">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Sales
                                    </Checkbox>
                                </MenuItem>
                                <MenuItem eventKey="1">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Processing
                                    </Checkbox>
                                </MenuItem>
                                <MenuItem eventKey="1">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Job
                                    </Checkbox>
                                </MenuItem>
                                <MenuItem eventKey="1">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Accounting
                                    </Checkbox>
                                </MenuItem>
                                <MenuItem eventKey="1">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Negotiations
                                    </Checkbox>
                                </MenuItem>
                                <MenuItem eventKey="1">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Close Out
                                    </Checkbox>
                                </MenuItem>
                            </div>
                        </MenuCollapse>
                        {subStage && (
                            <MenuCollapse label="Sub Stage">
                                <div className="flex flex-col">
                                    <MenuItem eventKey="1">
                                        <Checkbox className="flex flex-row-reverse w-full justify-between">
                                            Qualification
                                        </Checkbox>
                                    </MenuItem>
                                    <MenuItem eventKey="1">
                                        <Checkbox className="flex flex-row-reverse w-full justify-between">
                                            Close
                                        </Checkbox>
                                    </MenuItem>
                                    <MenuItem eventKey="1">
                                        <Checkbox className="flex flex-row-reverse w-full justify-between">
                                            Intake
                                        </Checkbox>
                                    </MenuItem>
                                    <MenuItem eventKey="1">
                                        <Checkbox className="flex flex-row-reverse w-full justify-between">
                                            Schedulling
                                        </Checkbox>
                                    </MenuItem>
                                    <MenuItem eventKey="1">
                                        <Checkbox className="flex flex-row-reverse w-full justify-between">
                                            Prep
                                        </Checkbox>
                                    </MenuItem>
                                </div>
                            </MenuCollapse>
                        )}

                        <MenuCollapse label="Milestone Pipeline">
                            <div className="flex flex-col">
                                <MenuItem eventKey="1">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Lead
                                    </Checkbox>
                                </MenuItem>
                                <MenuItem eventKey="1">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Scheduling
                                    </Checkbox>
                                </MenuItem>
                                <MenuItem eventKey="1">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Assesment
                                    </Checkbox>
                                </MenuItem>
                                <MenuItem eventKey="1">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Determination
                                    </Checkbox>
                                </MenuItem>
                                <MenuItem eventKey="1">
                                    <Checkbox className="flex flex-row-reverse w-full justify-between">
                                        Ligitation
                                    </Checkbox>
                                </MenuItem>
                            </div>
                        </MenuCollapse>
                    </Menu>
                </div>
                <div className="text-right mt-6">
                    <Button
                        className="ltr:mr-2 rtl:ml-2"
                        variant="plain"
                        onClick={onDialogClose}
                    >
                        Reset
                    </Button>
                    <Button variant="solid" onClick={onDialogOk}>
                        Apply
                    </Button>
                </div>
            </Dialog>
        </div>
    )
}

export default FilterDialog
