import { shallowMount } from "@vue/test-utils";
import LandingLayout from "@/modules/landing/layouts/LandingLayout.vue";
import router from "@/router";
import { RouterView } from "vue-router";

describe('<LandingLayout />', () =>{
    test('should be render correctly', () => {
    const wrapper = shallowMount(LandingLayout, {
        global: {
            plugins: [router]
        }
    })

    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find('main').exists()).toBe(true);
    expect(wrapper.find('footer').exists()).toBe(true);
    expect(wrapper.find('footer').html()).toContain('JALF SOFTWARE');
    expect(wrapper.find('footer').html()).toContain(`${ new Date().getFullYear() } JALF SOFTWARE. Derechos reservados`);
    expect(wrapper.findComponent({name: 'RouterView'}).exists()).toBe(true);
    expect(wrapper.findComponent(RouterView).exists()).toBe(true);
    });
    
});