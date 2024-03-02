import React from "react";
import "./paitent.css";
export default function Patient() {
  return (
    <div class="col-12 col-xl-12">
      <div class="card">
        <div class="card-header pb-0">
          <h4 class="card-title d-inline-block">Recent Patients </h4>
          <a href="patients.html" class="float-end patient-views">
            Show all
          </a>
        </div>
        <div class="card-block table-dash">
          <div class="table-responsive">
            <div
              id="DataTables_Table_1_wrapper"
              class="dataTables_wrapper dt-bootstrap4 no-footer"
            >
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <table
                    class="table mb-0 border-0 datatable custom-table dataTable no-footer"
                    id="DataTables_Table_1"
                    role="grid"
                    aria-describedby="DataTables_Table_1_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          class="sorting_asc a"
                          tabindex="0"
                          aria-controls="DataTables_Table_1"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label=": activate to sort column descending"
                          //   style=""
                        >
                          <div class="form-check check-tables">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="something"
                            ></input>
                          </div>
                        </th>
                        <th
                          class="sorting b"
                          tabindex="0"
                          aria-controls="DataTables_Table_1"
                          rowspan="1"
                          colspan="1"
                          aria-label="No: activate to sort column ascending"
                          //   style="width: 38.7812px;"
                        >
                          No
                        </th>
                        <th
                          class="sorting c"
                          tabindex="0"
                          aria-controls="DataTables_Table_1"
                          rowspan="1"
                          colspan="1"
                          aria-label="Patient name: activate to sort column ascending"
                          //   style="width: 134.344px;"
                        >
                          Patient name
                        </th>
                        <th
                          class="sorting d"
                          tabindex="0"
                          aria-controls="DataTables_Table_1"
                          rowspan="1"
                          colspan="1"
                          aria-label="Age: activate to sort column ascending"
                          //   style="width: 29.5938px;"
                        >
                          Age
                        </th>
                        <th
                          class="sorting e"
                          tabindex="0"
                          aria-controls="DataTables_Table_1"
                          rowspan="1"
                          colspan="1"
                          aria-label="Date of Birth: activate to sort column ascending"
                          //   style="width: 103.484px;"
                        >
                          Date of Birth
                        </th>
                        <th
                          class="sorting f"
                          tabindex="0"
                          aria-controls="DataTables_Table_1"
                          rowspan="1"
                          colspan="1"
                          aria-label="Diagnosis: activate to sort column ascending"
                          //   style="width: 73.5312px;"
                        >
                          Diagnosis
                        </th>
                        <th
                          class="sorting g"
                          tabindex="0"
                          aria-controls="DataTables_Table_1"
                          rowspan="1"
                          colspan="1"
                          aria-label="Triage: activate to sort column ascending"
                          //   style="width: 102.25px;"
                        >
                          Triage
                        </th>
                        <th
                          class="sorting h"
                          tabindex="0"
                          aria-controls="DataTables_Table_1"
                          rowspan="1"
                          colspan="1"
                          aria-label=": activate to sort column ascending"
                          //   style="width: 17px;"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" class="odd">
                        <td class="sorting_1">
                          <div class="form-check check-tables">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="something"
                            />
                          </div>
                        </td>
                        {/* <div class="fl"> */}
                        <td class="sorting_1">R00004</td>
                        <td class="table-image">
                          <img
                            width="28"
                            height="28"
                            class="rounded-circle"
                            src="https://preclinic.dreamstechnologies.com/html/template/assets/img/profiles/avatar-05.jpg"
                            alt
                          />
                          <h2>Galaviz Lalema</h2>
                        </td>
                        <td>21</td>
                        <td class="">09 January 2002</td>
                        <td>Heart Attack</td>
                        <td>
                          <button class="custom-badge status-orange">
                            Non Urgent
                          </button>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="#"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="fa fa-ellipsis-v"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="edit-patient.html">
                                <i class="fa-solid fa-pen-to-square m-r-5"></i>{" "}
                                Edit
                              </a>
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_appointment"
                              >
                                <i class="fa fa-trash-alt m-r-5"></i> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                        {/* </div> */}
                      </tr>
                      <tr role="row" class="even">
                        <td class="sorting_1">
                          <div class="form-check check-tables">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="something"
                            />
                          </div>
                        </td>
                        <td>R00002</td>
                        <td class="table-image">
                          <img
                            width="28"
                            height="28"
                            class="rounded-circle"
                            src="https://preclinic.dreamstechnologies.com/html/template/assets/img/profiles/avatar-03.jpg"
                            alt
                          />
                          <h2>Mark Hay Smith</h2>
                        </td>
                        <td>23</td>
                        <td>06 January 2002</td>
                        <td>Jaundice</td>
                        <td>
                          <button class="custom-badge status-pink">
                            Emergency
                          </button>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="#"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="fa fa-ellipsis-v"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr role="row" class="odd">
                        <td class="sorting_1">
                          <div class="form-check check-tables">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="something"
                            />
                          </div>
                        </td>
                        <td>R00003</td>
                        <td class="table-image">
                          <img
                            width="28"
                            height="28"
                            class="rounded-circle"
                            src="https://preclinic.dreamstechnologies.com/html/template/assets/img/profiles/avatar-04.jpg"
                            alt=""
                          />
                          <h2>Cristina Groves</h2>
                        </td>
                        <td>25</td>
                        <td>10 January 2002</td>
                        <td>Malaria</td>
                        <td><button class="custom-badge status-gray">Out Patient</button></td>
                        <td class="text-end">
													<div class="dropdown dropdown-action">
														<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
														<div class="dropdown-menu dropdown-menu-end">
															<a class="dropdown-item" href="edit-patient.html"><i class="fa-solid fa-pen-to-square m-r-5"></i> Edit</a>
															<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_appointment"><i class="fa fa-trash-alt m-r-5"></i> Delete</a>
                              </div>
                              </div>
                              </td>
                      </tr>
                      <tr role="row" class="even">
												<td class="sorting_1">
													<div class="form-check check-tables">
														<input class="form-check-input" type="checkbox" value="something"/>
													</div>
												</td>
												<td>R00004</td>
												<td class="table-image">
													<img width="28" height="28" class="rounded-circle" src="https://preclinic.dreamstechnologies.com/html/template/assets/img/profiles/avatar-05.jpg" alt=""/> 
													<h2>Galaviz Lalema</h2>
												</td>
												<td>21</td>
												<td>09 January 2002</td>
												<td>Typhoid</td>
												<td><button class="custom-badge status-orange">Non Urgent</button></td>
												<td class="text-end">
													<div class="dropdown dropdown-action">
														<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
														<div class="dropdown-menu dropdown-menu-end">
															<a class="dropdown-item" href="edit-patient.html"><i class="fa-solid fa-pen-to-square m-r-5"></i> Edit</a>
															<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_appointment"><i class="fa fa-trash-alt m-r-5"></i> Delete</a>
														</div>
													</div>
												</td>
											</tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
