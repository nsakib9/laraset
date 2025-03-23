import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../Pages/LandingPage.vue';
import Admin from '../Pages/Admin.vue';
import Tools from '../Pages/Tools.vue';
import ToolDetails from '../Pages/ToolDetails.vue';
import CoverLetterGenerator from '../Pages/CoverLetterGenerator.vue';

const routes = [
    { path: '/', component: LandingPage },
    { path: '/admin', component: Admin },
    { path: '/tools', component: Tools },
    { path: '/tools/:id', component: ToolDetails },
    { path: '/cover-letter-generator', component: CoverLetterGenerator },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

