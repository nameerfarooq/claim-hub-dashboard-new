import { useState } from 'react'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import type { MouseEvent } from 'react'
import { CiFilter } from 'react-icons/ci'
import { Menu } from '../ui'
import MenuCollapse from '../ui/Menu/MenuCollapse'
import MenuItem from '../ui/Menu/MenuItem'
import Checkbox from '../ui/Checkbox/Checkbox'

const FilterDialog = () => {
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
