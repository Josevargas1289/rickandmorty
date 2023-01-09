// import Location from "./Location";

const Page = ({ pag, setpage, couterPage }) => {
    return (
        <div >
        
            <div className='container-page'>


                {pag > 1 && <button onClick={() => setpage(pag - 1)}><i className='bx bxs-chevrons-left bx-sm'></i></button>}

                <p>{pag} de {couterPage}</p>

                {couterPage > pag && <button onClick={() => setpage(pag + 1)} ><i className='bx bxs-chevrons-right bx-sm' ></i></button>}
            </div>

        </div>
    );
};

export default Page;