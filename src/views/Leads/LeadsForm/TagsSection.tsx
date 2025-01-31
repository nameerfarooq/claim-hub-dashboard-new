import Card from '@/components/ui/Card'
import Select from '@/components/ui/Select'
import { Controller } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable'
import type { FormSectionBaseProps } from './types'

type TagsSectionProps = FormSectionBaseProps

const defaultOptions = [
    { value: 'Water', label: 'Water' },
    { value: 'Fire', label: 'Fire' },
    { value: 'Mold', label: 'Mold' },
    { value: 'Storm', label: 'Storm' },
    { value: 'Inquiry', label: 'Inquiry' },
]

const TagsSection = ({ control }: TagsSectionProps) => {
    return (
        <Card>
            <h4 className="mb-2">Lead Type</h4>
            <div className="mt-6">
                <Controller
                    name="tags"
                    control={control}
                    render={({ field }) => (
                        <Select
                            isMulti
                            isClearable
                            placeholder="Types"
                            componentAs={CreatableSelect}
                            options={defaultOptions}
                            onChange={(option) => field.onChange(option)}
                        />
                    )}
                />
            </div>
        </Card>
    )
}

export default TagsSection
