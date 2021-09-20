import React, { Component } from 'react';
import { Layout, Row, Col, Spin, Skeleton, Switch, Card, Icon, Avatar } from 'antd';
const { Meta } = Card;


class CheckAnt extends Component {

    state = {
        loading: true,
      }
    
    onChange = (checked) => {
        this.setState({ loading: !checked });
    }

    render() {
        const { loading } = this.state;
        return (
            <div style={{ textAlign: 'center' }}>
                
                <div>
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large" />
                </div>
                <br />
                    <Switch checked={!loading} onChange={this.onChange} />
                    <div style={{marginTop: 20}}>
                        <Card style={{ width: 500, textAlign: 'center', margin: 'auto' }} loading={loading}>
                            <Meta
                                avatar={<Avatar style={{width: 60, height: 60}} src="https://www.instituteofhypnotherapy.com/wp-content/uploads/2016/01/tutor-8.jpg" />}
                                title="John Doe"
                                description="This is an info about John Doe"
                            />
                        </Card>
                    </div>    
                    <div style={{marginTop: 20}}>
                        <Card
                        style={{ width: 300, margin: 'auto' }}
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                            >

                            <Skeleton loading={loading} avatar active>
                                <Meta
                                avatar={<Avatar style={{width: 60, height: 60}}  src="http://kovus.com/working-docs/capacity/wp-content/uploads/2016/01/testi-3.jpg" />}
                                title="Another Doe"
                                description="The guy who's not John Doe. He's Another Doe."
                                />
                            </Skeleton>

                        </Card>
                    </div>    
            </div>
        );
    }
}

export default CheckAnt;

