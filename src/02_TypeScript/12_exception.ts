interface Food {
    type: string
    eat: () => void
}

const food : Food = {
    type: 'Apple',
    eat: () => {
        console.log('eating')
    }
}
