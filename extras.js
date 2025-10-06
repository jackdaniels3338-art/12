const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require("discord.js")
const { General, BList, Tickesettings, tickets } = require("../Database/index");
const { SquareCloudAPI } = require('@squarecloud/api')

async function extrasFunction(client, interaction) {
    interaction.update({
        content:``,
        embeds: [
            new EmbedBuilder()
                .setAuthor({ name: client.user.username, iconURL: "https://cdn.discordapp.com/emojis/1265111276237881454.webp?size=96&quality=lossless" })
                .setTitle(`**Funções Extras**`)
                .setDescription(`- Selecione oque deseja utilizar através das opções abaixo.`)
                .setColor(General.get("oficecolor.main"))
                .setFooter({ text: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL() })
                .setTimestamp()
        ],
        components: [
            new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('checkLinkMensal')
                        .setLabel('Checkar Links Nitro')
                        .setStyle(1)
                        .setEmoji('1276927587083358321'),
                    new ButtonBuilder()
                        .setCustomId('controlarBothost')
                        .setLabel('Controle Geral')
                        .setStyle(1)
                        .setEmoji('1286148925803200565'),
                ),
            new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('voltar1')
                        .setLabel('Volta')
                        .setStyle(2)
                        .setEmoji('1265111710063132732')
                )
        ],
        ephemeral: true
    });
}


module.exports = {
    extrasFunction
}