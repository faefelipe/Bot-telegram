'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('377473646:AAFh8ABLiWiSfn3LJyo2ErmSiFV1har8Igs')

class EventsController extends TelegramBaseController {
    allEventsAction(scope) {
        let msg = `Olá hoje estamos no dia 27 de abril e estou apresentando o 
        o projeto de Fundamentos de Internet`

        scope.sendMessage(msg)    
    }

    get routes() {
        return {
            'allEvents': 'allEventsAction'
        }
    }
}

chatbot.router 
    .when (
        new TextCommand('/allevents', 'allEvents'), new EventsController()
    )
