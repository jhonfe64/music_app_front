import React from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column, ColumnFilterElementTemplateOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Tag } from "primereact/tag";

//https://primereact.org/datatable/
//buscar la tabla Stateful

function AlbumsList() {
  return (
    <div className="mt-16">
      <h1>lista de albums</h1>
      {/* <div className="card">
        <DataTable
          value={customers}
          paginator
          rows={5}
          header={header}
          filters={filters}
          onFilter={(e) => setFilters(e.filters)}
          selection={selectedCustomer}
          onSelectionChange={(e) => setSelectedCustomer(e.value)}
          selectionMode="single"
          dataKey="id"
          stateStorage="session"
          stateKey="dt-state-demo-local"
          emptyMessage="No customers found."
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
            style={{ width: "25%" }}
          ></Column>
          <Column
            header="Country"
            body={countryBodyTemplate}
            sortable
            sortField="country.name"
            filter
            filterField="country.name"
            filterPlaceholder="Search"
            style={{ width: "25%" }}
          ></Column>
          <Column
            header="Agent"
            body={representativeBodyTemplate}
            sortable
            sortField="representative.name"
            filter
            filterField="representative"
            showFilterMatchModes={false}
            filterElement={representativeFilterTemplate}
            filterMenuStyle={{ width: "14rem" }}
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="status"
            header="Status"
            body={statusBodyTemplate}
            sortable
            filter
            filterElement={statusFilterTemplate}
            filterMenuStyle={{ width: "14rem" }}
            style={{ width: "25%" }}
          ></Column>
        </DataTable>
      </div> */}
    </div>
  );
}

export default AlbumsList;
