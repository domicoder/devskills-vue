import { shallowMount } from "@vue/test-utils";

import TableCustom from "@/components/TableCustom.vue";

describe("Testing Component props", () => {
  const wrapper = shallowMount(TableCustom, {
    propsData: {
      members: [],
    },
  });

  it("checks the prop members  ", () => {
    expect(wrapper.props().members).toStrictEqual([]);
  });
});
