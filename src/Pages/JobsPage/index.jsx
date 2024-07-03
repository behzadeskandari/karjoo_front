import { Tab, Tabs } from "@mui/material";
import React, { Fragment } from "react";

export default function JobsPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <div className="container  px-4">
        <div className="row gx-5">
          <div className="col-4 d-flex flex-column">
            <div className="col-12 col-md-12 userDeatilHolder">
              <div>test22</div>
              <div>test22232</div>
            </div>
          </div>
          <div className="col-8 d-flex flex-column">
            <div className="DetailSearchable col-12 col-md-12">test</div>
            <div className="TabHolder col-12 col-md-12">
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="primary tabs example"
              >
                <Tab value="one" label="Item One" />
                <Tab value="two" label="Item Two" />
                <Tab value="three" label="Item Three" />
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
