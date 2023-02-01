import axios from "axios";

import {baseURL} from "../constants";

import React from 'react';

const axiosService = axios.create({baseURL});

export {axiosService}