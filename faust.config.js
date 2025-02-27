import { setConfig } from "@faustwp/core";
import templates from "./wp-templates";
import possibleTypes from "./possibleTypes.json";

/**
 * @type {import('@faustwp/core').FaustConfig} TEEEEST
 **/
export default setConfig({
  templates,
  experimentalPlugins: [],
  possibleTypes,
});
