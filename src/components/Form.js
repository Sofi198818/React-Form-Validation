import React, { useState } from "react";
import { Form, button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

import ShowList from "./ShowList";

export default function FormValidation() {
  const [clicked, setClicked] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form">
      {clicked ? (
        <>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
              <label>First Name</label>
              <input
                placeholder="First Name"
                type="text"
                {...register("firstName", { required: true, maxLength: 10 })}
              />
            </Form.Field>
            {errors.firstName && (
              <p className="text-error">Please check the First Name</p>
            )}
            <Form.Field>
              <label>Last Name</label>
              <input
                placeholder="Last Name"
                type="text"
                {...register("lastName", { required: true, maxLength: 10 })}
              />
            </Form.Field>
            {errors.lastName && (
              <p className="text-error">Please check the Last Name</p>
            )}

            <Form.Field>
              <label>Email</label>
              <input
                placeholder="Email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
            </Form.Field>
            {errors.email && (
              <p className="text-error">Please check the Email</p>
            )}
            <Form.Field>
              <label>Password</label>
              <input
                placeholder="Email"
                type="password"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
            </Form.Field>
            {errors.email && (
              <p className="text-error">Please check the Email</p>
            )}
            <Form.Field>
              <label>Birth data</label>
              <input
                placeholder="Password"
                type="date"
                required
                {...register("date", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                })}
              />
              {errors.date && <p className="text-error"></p>}
              <button className="submit" type="submit">
                Submit
              </button>
              <button
                className="next"
                onClick={() => setClicked((prev) => !prev)}
              >
                Next
              </button>
            </Form.Field>
          </Form>
        </>
      ) : (
        <div>
          <ShowList />
        </div>
      )}
    </div>
  );
}
