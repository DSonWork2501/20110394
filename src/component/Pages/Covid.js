import useFetch from '../../customize/fetch';
import Layout from '../Layout/Layout';
import '../styles/Nav.scss';
const Covid = () => {
    let dataalbum = useFetch('https://jsonplaceholder.typicode.com/users').dataalbum;
    let isLoading = useFetch('https://jsonplaceholder.typicode.com/users').isLoading;
    let isError = useFetch('https://jsonplaceholder.typicode.com/users').isError;

    return (
        <Layout>
            <div>
                <h3>Covid Page </h3>
                <table>
                    {/* {console.log(' check >>> ', dataalbum)} */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isError === false && isLoading === false && dataalbum && dataalbum.length > 0 &&
                            dataalbum.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address.city}</td>
                                        <td>{item.phone}</td>
                                    </tr>
                                )
                            })}
                        {isLoading === true &&
                            <tr>
                                <td colSpan={5} style={{ textAlign: "center" }}>
                                    Loading....
                                </td>
                            </tr>
                        }
                        {isError === true &&
                            <tr>
                                <td colSpan={5} style={{ textAlign: "center" }}>
                                    Some Thing Wrong....
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default Covid;