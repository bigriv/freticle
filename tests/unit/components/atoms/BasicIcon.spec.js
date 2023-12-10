import { mount } from '@vue/test-utils'
import BasicIcon from '@/components/atoms/BasicIcon.vue'

describe('BasicIcon.vue', () => {
    test("normal", () => {
        const icon ="circle-user"
        const wrapper = mount(BasicIcon, {
            props: { icon }
        })
        expect(wrapper.html()).toMatch(icon)
    })
})