import BaseIcon from "./BaseIcon.vue";
import { icons } from "./shared/icons";

export default {
  title: "Design System|Icon",

  parameters: {
    component: BaseIcon,
    componentSubtitle: "Displays an icon that represents a svg"
  }
};

export const defaultIcon = () => ({
  components: { BaseIcon },
  template:
    '<div>This is a inline <base-icon icon="facehappy" aria-label="Happy face" /> icon (default)</div>'
});

export const blockIcon = () => ({
  components: { BaseIcon },
  template:
    '<div>This is a block <base-icon icon="facehappy" :block="true" aria-label="Happy face" /> icon</div>'
});

const listStyle = {
  display: "flex",
  "flex-flow": "row wrap",
  "list-style": "none",
  "padding-top": "1em"
};
const listItemStyle = {
  display: "inline-flex",
  "flex-direction": "row",
  "align-items": "center",
  flex: "0 1 20%",
  "min-width": "120px",
  padding: "0px 7.5px 20px"
};
const listIcon = {
  "margin-right": "10px",
  width: "24px",
  height: "24px"
};

export const labels = () => ({
  components: { BaseIcon },
  data() {
    return {
      icons: icons,
      listStyle,
      listItemStyle,
      listIcon
    };
  },
  template: `
    <div>
    There are {{ Object.keys(icons).length }} icons
        <div :style="listStyle" >
            <div :style="listItemStyle" v-for="key in Object.keys(icons)">
                <base-icon :style="listIcon" :icon="key" aria-hidden />
                <div>{{key}}</div>
            </div>
        </div>
    </div>`
});

const minimalItem = {
  flex: "none",
  "min-width": "auto",
  padding: "0",
  background: "#fff",
  border: "1px solid #666"
};

const minimalIcon = {
  display: "block",
  "margin-right": "0",
  width: "48px",
  height: "48px"
};

export const noLabels = () => ({
  components: { BaseIcon },
  data() {
    return {
      icons: icons,
      listStyle,
      listItemStyle: minimalItem,
      listIcon: minimalIcon
    };
  },
  template: `
      <div>
      There are {{ Object.keys(icons).length }} icons
          <div :style="listStyle" >
              <div :style="listItemStyle" v-for="key in Object.keys(icons)">
                  <base-icon :style="listIcon" :icon="key" :aria-label="key" />
              </div>
          </div>
      </div>`
});
