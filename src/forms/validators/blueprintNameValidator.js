/* eslint-disable react/display-name */
import React from "react";
import { FormattedMessage } from "react-intl";

const blueprintNameValidator = () => (value, allValues) => {
  if (allValues["blueprint-names"].includes(value)) {
    return (
      <FormattedMessage defaultMessage="A blueprint with this name already exists." />
    );
  }
  if (value.match(/\s/)) {
    return (
      <FormattedMessage defaultMessage="Blueprint names cannot have spaces." />
    );
  }
  return undefined;
};

export default blueprintNameValidator;
