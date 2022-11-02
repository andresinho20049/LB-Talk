import { ActionsProps, FabGroup } from "./FabGroup"


export const RecordActions = () => {

    const actions: ActionsProps[] = [
        {
            icon: 'clipboard-play',
            label: undefined,
            onPress: () => console.log('Pressed play'),
        },
        {
            icon: 'record-rec',
            label: undefined,
            onPress: () => console.log('Pressed rec'),
        }
    ]

    return (
        <FabGroup iconOpen="plus" iconClose="record-circle-outline" actions={actions} />
    )
}