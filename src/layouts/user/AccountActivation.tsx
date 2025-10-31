import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AccountActivation() {

    //Lấy giá trị email và activateCode sau dau ? tren duong dan
    //VD: http://localhost:3000/activate?email=....&activeCode=....
    // const searchParams = new URLSearchParams(window.location.search);
    // const emailParam = searchParams.get("email");
    // const activeCode = searchParams.get("activeCode");
    //Lấy giá trị email và activateCode dạng: 
    // http://localhost:3000/activate/.....(email)/.....(activeCode)
    const { email, activeCode } = useParams();
    const [isActive, setActive] = useState(false);
    const [announce, setAnnounce] = useState('');

    useEffect(
        () => {
            if (email && activeCode) {
                handleActive(email, activeCode);
            }
        }, []
    )

    const handleActive = async (email: string, activeCode: string) => {
        try {
            const url = `http://localhost:8080/account/activate?email=${email}&activateCode=${activeCode}`;
            const response = await fetch(url,
                { method: 'GET' }
            );

            if (response.ok) {
                setActive(true);
            } else {
                setAnnounce(response.text + "");
            }

        } catch (error) {

        }
    }

    return (
        <div>
            <h1>Activate the account</h1>
            {
                isActive ?
                    (<p>Activated successfully! Please log in to use our services.</p>) :
                    (announce)

            }
        </div>
    );

}
export default AccountActivation;