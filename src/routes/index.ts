/// <reference path='../typings/tsd.d.ts' />

"use strict";
import * as express from "express";

/**
 * Base Route Class
 * This helps to mount all api endpoints
 */	
module Route{
 export class Index {

	/**
	 * Created to serve as a health-check 
	 * @param {Request} req - http request
	 * @param {Response} res - http response
	 * @return {NextFunction} next - next method
	 */
	all(req: express.Request, res: express.Response, next: express.NextFunction){
		res.status(200).json({health: 'Good'}); 	
	}

	/**
	 * Created to serve as a health-check 
	 * @param {Request} req - http request
	 * @param {Response} res - http response
	 * @return {NextFunction} next - next method
	 */
    get(req: express.Request, res: express.Response, next: express.NextFunction){
		res.status(200).json({health: 'Good'}); 
   	}

	/**
	 * Created to serve as a health-check 
	 * @param {Request} req - http request
	 * @param {Response} res - http response
	 * @return {NextFunction} next - next method
	 */
   	post(req: express.Request, res: express.Response, next: express.NextFunction){
		res.status(200).json({health: 'Good'}); 
	}

	/**
	 * Created to serve as a health-check 
	 * @param {Request} req - http request
	 * @param {Response} res - http response
	 * @return {NextFunction} next - next method
	 */
   	put(req: express.Request, res: express.Response, next: express.NextFunction){
		res.status(200).json({health: 'Good'}); 
	}

	/**
	 * Created to serve as a health-check 
	 * @param {Request} req - http request
	 * @param {Response} res - http response
	 * @return {NextFunction} next - next method
	 */
   	delete(req: express.Request, res: express.Response, next: express.NextFunction){
		res.status(200).json({health: 'Good'}); 
	}

	/**
	 * Created to serve as a health-check 
	 * @param {Request} req - http request
	 * @param {Response} res - http response
	 * @return {NextFunction} next - next method
	 */
   	patch(req: express.Request, res: express.Response, next: express.NextFunction){
		res.status(200).json({health: 'Good'}); 
	}

	/**
	 * Created to serve as a health-check 
	 * @param {Request} req - http request
	 * @param {Response} res - http response
	 * @return {NextFunction} next - next method
	 */
   	options(req: express.Request, res: express.Response, next: express.NextFunction){
		res.status(200).json({health: 'Good'}); 
	}

	/**
	 * Created to serve as a health-check 
	 * @param {Request} req - http request
	 * @param {Response} res - http response
	 * @return {NextFunction} next - next method
	 */
   	head(req: express.Request, res: express.Response, next: express.NextFunction){
		res.status(200).json({health: 'Good'}); 
	}
 }
}
export = Route;
