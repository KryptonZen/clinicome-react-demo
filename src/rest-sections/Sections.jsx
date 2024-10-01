import "./Sections.css"

function Sections() {
    return (
        <div className='Sections'>
            <ContentArea1/>
            <ContentArea2/>
            <QandA/>
            <Footer/>
        </div>
    )
}

function ContentArea1() {
    return (
        <div className='ContentArea1'>
            <h2>Content Area 1</h2>
        </div>
    )
}

function ContentArea2() {
    return (
        <div className='ContentArea2'>
            <h2>Content Area 2</h2>
            <AppAnimation/>
        </div>
    )
}

const AppAnimation = () => <div className='AppAnimation'> <h3>Appointment App Animation</h3> </div>


function QandA() {
    return (
        <div className='QandA'>
            <h2>Q&A Section</h2>
        </div>
    )
}

function Footer() {
    return (
        <div className='Footer'>
            <h2>Footer Section</h2>
        </div>
    )
}


export default Sections
