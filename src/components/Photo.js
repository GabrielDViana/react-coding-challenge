import React from 'react';

const Photo = (props) => {
    return (
        <Descriptions title={props.data.rocket_name} bordered>
            <Descriptions.Item label="Nacionalidade">{props.data.nationality}</Descriptions.Item>
            <Descriptions.Item label="Fabricante">{props.data.manufacturer}</Descriptions.Item>
            <Descriptions.Item label="Data do Lançamento">{props.data.launch_date_utc}</Descriptions.Item>
            <Descriptions.Item label="Tipo do Foguete">{props.data.rocket_type}</Descriptions.Item>
            <Descriptions.Item label="Local do Lançamento" span={2}>{props.data.site_name}</Descriptions.Item>
        </Descriptions>
    );
}

export default Photo;