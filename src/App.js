import {Fragment} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {DefaultLayout} from './component/Layout'
import {publicRoutes} from './routes'

function App() {
    return <BrowserRouter>
        <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout === null) {
                            Layout = Fragment;
                        } else if (route.layout) {
                            Layout = route.layout;
                        }
                        let Page = route.element;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page></Page>
                                    </Layout>
                                }
                            />
                        );
                    })}
        </Routes>
    </BrowserRouter>
}

export default App;
