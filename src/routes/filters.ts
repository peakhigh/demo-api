/// <reference path='../typings/tsd.d.ts' />

"use strict";
import * as express from "express";
import { Property } from '../models/property'

module Route{
	/**
	 * Filters Route Class
	 * This helps to mount endpoints for filtering the http requests payload
	 */		
	export class Filters {
		 /**
         * Works as a health-check as get functionality is not yet defined
         * @param {Request} req - http request
         * @param {Response} res - http response
         * @return {NextFunction} next - next method
         */
		get(req: express.Request, res: express.Response, next: express.NextFunction){
			res.status(200).json({info: 'Not supported.'});  
		}

		/**
         * Post Method - which expects properties payload and filters the payload based on isHtvNCompleted filter of each property
         * @param {Request} req - http request
         * @param {Response} res - http response
         * @return {NextFunction} next - next method
         */
		post(req: express.Request, res: express.Response, next: express.NextFunction){
			//handle invalid jsons
			if (!req.body || typeof req.body.payload === 'undefined' || !req.body.payload) {
				return res.status(400).json({'error': 'Could not decode request: JSON parsing failed'});
			}
			let payload:any[];
			if (!Array.isArray(req.body.payload)) {
				payload = [req.body.payload];
			} else {
				payload = req.body.payload;
			}		
			console.info('filters will apply requested data');
		
			//filter the payload
			let filteredData:any[] = [];
			payload.forEach(function(entry:any) {
				let property:Property = new Property(entry);
				//applying filter of type='htv' and workflow='completed'
				if (property.isHtvNCompleted()) {
					//if so collect the compact version
					filteredData.push(property.compactVersion());
				}
			});
		
			res.status(200).json({response: filteredData});
		}
	}
}
export = Route;
