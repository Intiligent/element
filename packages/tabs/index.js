import ElTabs from './src/tabs';

ElTabs.install = function(Vue) {
    Vue.component(ElTabs.name, ElTabs);
};

export default ElTabs;
