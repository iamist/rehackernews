// import React, {useEffect, useState} from 'react';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class Api {

    request?: AxiosInstance;
    defaultRequestConfig: AxiosRequestConfig = {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        }
    }

    constructor(options?: AxiosRequestConfig | {}) {
        let requestConfig: AxiosRequestConfig = {...this.defaultRequestConfig, ...options};

        this.request = axios.create(requestConfig);
    }

    /**
     * getInstance - return axios instance
     */
    public getRequest() {
        return this.request;
    }

    /**
     * generic request that will get stories via requested resource
     * @params {string} resource
     * @returns {Array}
     */
    protected async fetch(resource: string) {
        let error = null;
        let data;

        try {
            const response = await this.getRequest()?.get(resource);
            data = response?.data;
        } catch (e) {
            error = e;
        }

        return [error, data];
    }

}

export default Api;