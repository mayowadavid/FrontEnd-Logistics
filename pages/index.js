import {useRouter} from 'next/router';
import { useEffect } from 'react';
const Index = () => {
        const router = useRouter();
        useEffect(()=> {
                router.replace('dashboard');
        }, []);
return (
        <>
        </>   
)}

export default Index;