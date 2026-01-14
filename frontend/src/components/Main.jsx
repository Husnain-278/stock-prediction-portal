import Button from './Button'

const Main = () => {
    return (
        <>
            <div className='container'>
                <div className='p-5 text-center bg-light-dark rounded'>
                    <h1 className='text-light'>
                        Stock Prediction Portal
                    </h1>
                    <p className='text-light lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quo culpa odit vitae magni repellendus quia placeat minus dolorum corrupti? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam laboriosam quisquam fugit laudantium nostrum dolorum. Ea aliquam praesentium ducimus, blanditiis numquam, perspiciatis laudantium, illum porro autem cupiditate harum quos facilis!</p>
                    <Button text = 'Explore Now' class='btn-outline-info' url='/' />
                 </div>
            </div>
        </>
    )
}

export default Main