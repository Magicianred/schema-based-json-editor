import * as Vue from "vue";
import * as common from "./common";

import { arrayEditor } from "./vue/array-editor";
import { booleanEditor } from "./vue/boolean-editor";
import { editor } from "./vue/editor";
import { icon } from "./vue/icon";
import { nullEditor } from "./vue/null-editor";
import { numberEditor } from "./vue/number-editor";
import { objectEditor } from "./vue/object-editor";
import { stringEditor } from "./vue/string-editor";
import { titleEditor } from "./vue/title-editor";

/* tslint:disable:only-arrow-functions */
/* tslint:disable:no-unused-new */
/* tslint:disable:object-literal-shorthand */

Vue.component("array-editor", arrayEditor);
Vue.component("boolean-editor", booleanEditor);
Vue.component("editor", editor);
Vue.component("icon", icon);
Vue.component("null-editor", nullEditor);
Vue.component("numberEditor", numberEditor);
Vue.component("objectEditor", objectEditor);
Vue.component("stringEditor", stringEditor);
Vue.component("title-editor", titleEditor);

Vue.component("json-editor", {
    template: `
    <div>
        <object-editor v-if="schema.type === 'object'"
            :schema="schema"
            :initial-value="initialValue"
            :theme="themeObject"
            :locale="localeObject"
            :icon="iconObject"
            :required="true"
            @update-value="updateValueFunction(arguments[0])">
        </object-editor>
        <array-editor v-if="schema.type === 'array'"
            :schema="schema"
            :initial-value="initialValue"
            :theme="themeObject"
            :locale="localeObject"
            :icon="iconObject"
            :required="true"
            @update-value="updateValueFunction(arguments[0])">
        </array-editor>
        <number-editor v-if="schema.type === 'number' || schema.type === 'integer'"
            :schema="schema"
            :initial-value="initialValue"
            :theme="themeObject"
            :locale="localeObject"
            :icon="iconObject"
            :required="true"
            @update-value="updateValueFunction(arguments[0])">
        </number-editor>
        <boolean-editor v-if="schema.type === 'boolean'"
            :schema="schema"
            :initial-value="initialValue"
            :theme="themeObject"
            :locale="localeObject"
            :icon="iconObject"
            :required="true"
            @update-value="updateValueFunction(arguments[0])">
        </boolean-editor>
        <null-editor v-if="schema.type === 'null'"
            :schema="schema"
            :initial-value="initialValue"
            :theme="themeObject"
            :locale="localeObject"
            :icon="iconObject"
            :required="true"
            @update-value="updateValueFunction(arguments[0])">
        </null-editor>
        <string-editor v-if="schema.type === 'string'"
            :schema="schema"
            :initial-value="initialValue"
            :theme="themeObject"
            :locale="localeObject"
            :icon="iconObject"
            :required="true"
            @update-value="updateValueFunction(arguments[0])">
        </string-editor>
    </div>
    `,
    props: ["schema", "initialValue", "theme", "icon", "locale", "readonly"],
    data: function (this: This) {
        const localeObject = common.getLocale(this.locale);
        return {
            themeObject: common.getTheme(this.theme),
            localeObject,
            iconObject: common.getIcon(this.icon, localeObject),
        };
    },
    methods: {
        updateValueFunction: common.debounce(function (this: This, validityValue: common.ValidityValue<common.ValueType>) {
            this.$emit("update-value", validityValue);
        }, 100),
    },
});

export type This = {
    $emit: (event: string, args: common.ValidityValue<common.ValueType>) => void;
    locale: common.Locale;
    theme: common.Theme;
    icon: common.Icon;
};