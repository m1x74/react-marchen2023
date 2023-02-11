import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";

import {AlbumsPage, CommentsPage, HomePage, LoginPage, NotFoundPage, PostPage, TodosPage} from "./pages";
import {RequireAuth} from "./hoc";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/todos'} element={<TodosPage/>}/>
                    <Route path={'/albums'} element={<AlbumsPage/>}/>
                    <Route path={'/comments'} element={
                        <RequireAuth>
                                <CommentsPage/>
                        </RequireAuth>}>
                        <Route path={':postId'} element={<PostPage/>}/>
                    </Route>
                    <Route path={'/login'} element={<LoginPage/>}/>


                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>


            </Routes>
        </div>
    );
}

export {
    App
}
