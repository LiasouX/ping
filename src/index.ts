
import axios from 'axios'
import { Command } from 'commander'

async function get(url: string) {
    while (true) {
        try {
            const { status } = await axios.get(url)
            console.log(`${status} ${new Date().getTime()}`)
        } catch (error: any) {
            console.error(error.message)
        }
    }
}



function serve() {

    const program = new Command()
    program.option(
        "-u, --url <file>"
    )

    program.command('start')
        .action(async () => {
            try {
                let { url } = program.opts()
                for (let i = 0; i < 20; i++) {
                    get(url)
                }

            } catch (error) {
                console.error(error)
            }
        })
    program.parse()
}




serve()