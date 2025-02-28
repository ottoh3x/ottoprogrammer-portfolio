
"use client";
import React from "react";
// import StudentFormModal from './components/add-student'
// import StudentTable from './components/students-table'
import {Tabs, Tab, Input, Link, Button, Card, CardBody} from "@heroui/react";
import EditAcceptanceLetter from "./acceptance-letter";
import StudentTable from "./students-table";
import StudentDocumentsGenerator from "./study-agreement";

export default function Panko() {
    const [selected, setSelected] = React.useState("login");

  return (
    <div className="flex mt-32 mx-auto justify-center min-h-full">

      <Card className="max-w-5xl w-full">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            aria-label="Tabs form"
            selectedKey={selected}
            size="md"
            onSelectionChange={setSelected}
          >
            <Tab key="acceptance-letter" title="Acceptance Letter">
            <EditAcceptanceLetter />

            </Tab>
            <Tab key="study-agreement" title="Study Agreement">
            <StudentDocumentsGenerator />

            </Tab>
          </Tabs>
        </CardBody>
      </Card>

    </div>
  );
}
