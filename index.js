/*
 * @Author slashhuang
 * 17/5/26
 */
const exec = require('child_process').exec;
// const WebHookUrl = 'https://oapi.dingtalk.com/robot/send?access_token=41abd5415cb5c7b6da2c2dc69b675eecfe49cad7437a9f157acdec2a27b5b1a2'
const WebHookUrl ='https://oapi.dingtalk.com/robot/send?access_token=41abd5415cb5c7b6da2c2dc69b675eecfe49cad7437a9f157acdec2a27b5b1a2';
const templateMocker =(mockJson) => [
	'curl',
	`'${WebHookUrl}'`,
	'-H',
	`'Content-Type: application/json'`,
	'-d',
	`'${JSON.stringify(mockJson)}'`
].join(' ')

const cardJson = require('./src/card')
const linkJson = require('./src/link')
const markdownJson = require('./src/markdown')
const textJson = require('./src/text')

exec(templateMocker(cardJson))
exec(templateMocker(linkJson))
exec(templateMocker(markdownJson))
exec(templateMocker(textJson))