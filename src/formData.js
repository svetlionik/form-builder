const formData = [
    {
        'fields': [
            {
                'id': 'firstname',
                'label': 'First Name',
                'required': true,
                'placeholder': 'Enter your first name ...',
                'type': 'text',
                'value': ''
            },
            {
                'id': 'lastname',
                'label': 'Last Name',
                'required': true,
                'placeholder': 'Enter your last name ...',
                'type': 'text',
                'value': ''
            },
            {
                'id': 'country',
                'label': 'County',
                'required': true,
                'type': 'select',
                'options': [
                    { 'label': 'Bulgaria' },
                    { 'label': 'Greece' },
                    { 'label': 'Romania' },
                    { 'label': 'Serbia' }
                ],
                'value': ''
            },
            {
                'id': 'subscribe',
                'label': 'Subscribe to newsletter',
                'type': 'checkbox',
                'value': ''
            }
        ]
    }
];
export default formData;