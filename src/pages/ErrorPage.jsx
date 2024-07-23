import React, { Suspense, lazy } from 'react';
import Container from '../UI/Container';
import Light from '../UI/Light';
import { BiSolidMessageError } from "react-icons/bi";
import Transition from '../UI/Transition';
const Header = lazy(() => import('../components/Header/Header'));

const ErrorPage = () => {
    return (
        <Transition>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
            </Suspense>
            <Light color='purple' />
            <Container>
                <main className='error-container' >
                    <BiSolidMessageError size={200} />
                    <div className='error'>
                        <h2>Oops... Not there</h2>
                        <p>Could not find this page!</p>
                    </div>
                </main>

            </Container>
        </Transition>
    );
}

export default ErrorPage;