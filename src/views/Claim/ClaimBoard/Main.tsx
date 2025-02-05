import { Container } from '@/components/shared'
import { Button, Card } from '@/components/ui'
import { CiFilter } from 'react-icons/ci'
import ClaimBoard from './ClaimBoard'
import FilterDialog from '@/components/custom/FilterDialog'

const Main = () => {
    return (
        <Container>
            <Card>
                <div className="flex flex-row items-center justify-between mb-4">
                    <p className="text-2xl font-bold">Claim pipeline</p>
                    <div className="flex flex-row gap-3 items-center">
                        <FilterDialog subStage={false} />
                    </div>
                </div>
                <div>
                    <ClaimBoard />
                </div>
            </Card>
        </Container>
    )
}

export default Main
